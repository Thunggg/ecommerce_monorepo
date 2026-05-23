import { Injectable } from '@nestjs/common'
import { RolesService } from './roles.service'
import { HashingService } from '../../shared/services/hashing.service'
import {
  ForgotPasswordBodySchemaType,
  GoogleAuthStateSchemaType,
  LoginBodyType,
  RefreshTokenBodySchemaType,
  RegisterBodyType,
  SendOTPBodyType,
  UserType,
  VerifyCationCodeType,
} from './auth.model'
import {
  EmailAlreadyExistsException,
  EmailNotFoundException,
  EmailRequiredException,
  FailedToSendOTPException,
  FieldNotEmptyException,
  IncorrectPasswordException,
  InvalidVerificationCodeException,
  OTPExpiredException,
  RefreshTokenRevokedException,
  TOTPAlreadyEnableException,
  UniqueViolationException,
} from './error.model'
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/client'
import { TypeOfVerificationCode } from '../../shared/constants/auth.constant'
import { AuthRepository } from './auth.repo'
import { generateOTP } from '../../shared/helper/generate-otp'
import { addMilliseconds } from 'date-fns'
import { envConfig } from '../../shared/config/validate'
import ms, { StringValue } from 'ms'
import { EmailService } from '../../shared/services/email.service'
import { AccessTokenPayloadCreate } from '../../shared/types/jwt.type'
import { TokenService } from '../../shared/services/token.service'
import { OAuth2Client } from 'google-auth-library'
import { google } from 'googleapis'
import { v4 as uuidv4 } from 'uuid'
import { MessageResType } from '../../shared/models/response.model'
import { TwoFactorAuthService } from '../../shared/services/2fa.service'
import { ur } from 'zod/v4/locales'

@Injectable()
export class AuthService {
  private oauth2Client: OAuth2Client

  constructor(
    private readonly rolesService: RolesService,
    private readonly hashingService: HashingService,
    private readonly authRepository: AuthRepository,
    private readonly emailService: EmailService,
    private readonly tokenService: TokenService,
    private readonly twoFactorAuthService: TwoFactorAuthService,
  ) {
    this.oauth2Client = new google.auth.OAuth2({
      client_id: envConfig.GOOGLE_CLIENT_ID,
      clientSecret: envConfig.GOOGLE_CLIENT_SECRET,
      redirect_uris: [envConfig.GOOGLE_REDIRECT_URI],
    })
  }

  async register(body: RegisterBodyType): Promise<Omit<UserType, 'password' | 'totpSecret'>> {
    try {
      const { code, email, name, phoneNumber, password } = body

      // Xác thực mã OTP
      await this.validateVerificationCode({ email, code, type: TypeOfVerificationCode.REGISTER })

      // Hash và lấy client role id
      const [clientRoleId, hashedPassword] = await Promise.all([
        this.rolesService.getClientRoleId(),
        this.hashingService.hash(password),
      ])

      // Tạo user
      const [user] = await Promise.all([
        this.authRepository.createUser({
          email,
          name,
          phoneNumber,
          password: hashedPassword,
          roleId: clientRoleId,
        }),
        this.authRepository.deleteVerifycationCode({ email, type: TypeOfVerificationCode.REGISTER }),
      ])

      return user
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw UniqueViolationException
      } else if (error instanceof PrismaClientValidationError) {
        throw FieldNotEmptyException
      }
      throw error
    }
  }

  async sendOTP(body: SendOTPBodyType): Promise<MessageResType> {
    try {
      // Tìm user theo email
      const user = await this.authRepository.findUserByUniqueValue({ email: body.email })

      // Kiểm tra nếu user đã tồn tại và type là REGISTER
      if (body.type === TypeOfVerificationCode.REGISTER && user) {
        throw EmailAlreadyExistsException
      }

      // Kiểm tra nếu user không tồn tại và type là FORGOT_PASSWORD
      if (body.type === TypeOfVerificationCode.FORGOT_PASSWORD && !user) {
        throw EmailNotFoundException
      }

      // Tạo mã OTP
      const code = generateOTP()

      // Tạo verification code
      await this.authRepository.createVerifycationCode({
        email: body.email,
        code,
        type: body.type,
        expiresAt: addMilliseconds(new Date(), ms(envConfig.OTP_EXPIRES_IN as StringValue)),
      })

      // Gửi email để xác thực
      const { error } = await this.emailService.sendOTP({ email: body.email, code })

      if (error) {
        throw FailedToSendOTPException
      }

      return { message: 'OTP sent successfully' }
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw FieldNotEmptyException
      } else if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw UniqueViolationException
      }
      throw error
    }
  }

  async login(body: LoginBodyType & { userAgent: string; ipAddress: string }): Promise<{
    accessToken: string
    refreshToken: string
  }> {
    try {
      const { email, password, userAgent, ipAddress } = body

      // Tìm user theo email
      const user = await this.authRepository.findUserIncludeRole({ email })

      if (!user) {
        throw EmailNotFoundException
      }

      // Kiểm tra mật khẩu
      const isPasswordValid = await this.hashingService.verify(password, user.password)

      if (!isPasswordValid) {
        throw IncorrectPasswordException
      }

      // Tạo device
      const device = await this.authRepository.createDevice({
        userId: user.id,
        userAgent,
        ip: ipAddress,
        lastActive: new Date(),
        isActive: true,
      })

      // Tạo refresh token và access token
      const tokens = await this.generateToken({
        userId: user.id,
        roleId: user.roleId,
        roleName: user.role.name,
        deviceId: device.id,
      })

      return tokens
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw FieldNotEmptyException
      } else if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw UniqueViolationException
      }
      throw error
    }
  }

  async refreshToken(payload: RefreshTokenBodySchemaType & { userAgent: string; ipAddress: string }) {
    try {
      // Verify refresh token
      const { userId } = await this.tokenService.verifyRefreshToken(payload.token)

      // Kiểm tra refresh token có tồn tại trong DB hay ko
      const refreshTokenIsInDB = await this.authRepository.findUniqueRefreshTokenIncludeUserRole({
        token: payload.token,
      })

      if (!refreshTokenIsInDB) {
        throw RefreshTokenRevokedException
      }

      const {
        deviceId,
        user: {
          roleId,
          role: { name: roleName },
        },
      } = refreshTokenIsInDB

      // Cập nhật device, xóa refreshToken cũ, tạo accessToken và refreshToken mới
      const [, , tokens] = await Promise.all([
        this.authRepository.updateDevice(deviceId, {
          ip: payload.ipAddress,
          userAgent: payload.userAgent,
        }),
        this.authRepository.deleteRefreshToken({ token: payload.token }),
        this.generateToken({ userId, deviceId, roleId, roleName }),
      ])

      return tokens
    } catch (error: unknown) {
      if (error instanceof PrismaClientValidationError) {
        throw FieldNotEmptyException
      } else if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw UniqueViolationException
      }
      throw error
    }
  }

  async getAuthorizationUrl({ userAgent, ip }: GoogleAuthStateSchemaType) {
    const scope = ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']

    const stateString = Buffer.from(JSON.stringify({ userAgent, ip })).toString('base64')

    const url = this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope,
      include_granted_scopes: true,
      state: stateString,
    })

    return { url }
  }

  async googleCallback({ code, state }: { code: string; state: string }) {
    try {
      let userAgent = 'Unknown'
      let ip = 'Unknown'

      // Lấy thông tin client từ state
      try {
        if (state) {
          const clientInfo = JSON.parse(Buffer.from(state, 'base64').toString()) as GoogleAuthStateSchemaType
          userAgent = clientInfo.userAgent
          ip = clientInfo.ip
        }
      } catch (error) {
        console.log(error)
      }

      // Lấy token từ Google
      const { tokens } = await this.oauth2Client.getToken(code)
      this.oauth2Client.setCredentials(tokens)

      // Lấy thông tin user từ Google
      const oauth2 = google.oauth2({ version: 'v2', auth: this.oauth2Client })
      const { data } = await oauth2.userinfo.get()

      if (!data.email) {
        throw EmailRequiredException
      }

      let user = await this.authRepository.findUserIncludeRole({ email: data.email })

      // Nếu user không tồn tại thì tạo mới
      if (!user) {
        const clientRole = await this.rolesService.getClientRoleId()
        const randomPassword = uuidv4()
        const hashedPassword = await this.hashingService.hash(randomPassword.toString())

        user = await this.authRepository.createUserIncludRole({
          email: data.email,
          name: data.name ?? '',
          phoneNumber: '',
          roleId: clientRole,
          password: hashedPassword,
          avatar: data.picture ?? null,
        })
      }

      const device = await this.authRepository.createDevice({
        userId: user?.id as number,
        userAgent,
        ip,
      })

      const authTokens = await this.generateToken({
        userId: user?.id as number,
        roleId: user?.roleId as number,
        roleName: user?.role.name as string,
        deviceId: device.id,
      })

      return authTokens
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async generateToken(payload: AccessTokenPayloadCreate): Promise<{
    accessToken: string
    refreshToken: string
  }> {
    // Tạo accessToken và refreshToken
    const [accessToken, refreshToken] = await Promise.all([
      this.tokenService.signAccessToken({
        userId: payload.userId,
        deviceId: payload.deviceId,
        roleId: payload.roleId,
        roleName: payload.roleName,
      }),
      this.tokenService.signRefreshToken({
        userId: payload.userId,
      }),
    ])

    // Decoded refresh token để lưu vào DB
    const decodedRefreshToken = await this.tokenService.verifyRefreshToken(refreshToken)

    // Lưu vào DB
    await this.authRepository.createRefreshToken({
      deviceId: payload.deviceId,
      token: refreshToken,
      userId: payload.userId,
      expiresAt: new Date(decodedRefreshToken.exp * 1000),
    })

    return { accessToken, refreshToken }
  }

  async logout(refreshToken: string): Promise<MessageResType> {
    try {
      await this.tokenService.verifyRefreshToken(refreshToken)

      const deletedRefreshToken = await this.authRepository.deleteRefreshToken({ token: refreshToken })

      await this.authRepository.updateDevice(deletedRefreshToken.deviceId, {
        isActive: false,
      })

      return { message: 'logout successfully' }
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw FieldNotEmptyException
      } else if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw UniqueViolationException
      }
      throw error
    }
  }

  async forgotPassword(payload: ForgotPasswordBodySchemaType): Promise<MessageResType> {
    const { code, email, newPassword } = payload

    // Kiểm tra xem user có tồn tại hay không
    const user = await this.authRepository.findUserByUniqueValue({
      email,
    })

    if (!user) {
      throw EmailNotFoundException
    }

    // kiểm tra mã otp có hợp lệ hay không
    await this.validateVerificationCode({
      email,
      code,
      type: TypeOfVerificationCode.FORGOT_PASSWORD,
    })

    const passwordHashed = await this.hashingService.hash(newPassword)

    await Promise.all([
      this.authRepository.updateUser({ email }, { email: passwordHashed }),
      this.authRepository.deleteVerifycationCode({ email, type: TypeOfVerificationCode.FORGOT_PASSWORD }),
    ])

    return {
      message: 'Update password successfully',
    }
  }

  async validateVerificationCode(uniqueValue: {
    email: string
    code: string
    type: TypeOfVerificationCode
  }): Promise<VerifyCationCodeType> {
    const verifycationOTP = await this.authRepository.findVerificationCode({
      email: uniqueValue.email,
      type: uniqueValue.type,
      code: uniqueValue.code,
    })

    if (!verifycationOTP) {
      throw InvalidVerificationCodeException
    }

    if (verifycationOTP.expiresAt < new Date()) {
      throw OTPExpiredException
    }

    return verifycationOTP
  }
  async setupTwoFactorAuth(userId: number) {
    // Lấy thông tin user và kiểm tra xem có tồn tại hay ko
    const user = await this.authRepository.findUserByUniqueValue({
      id: userId,
    })

    if (!user) {
      throw EmailNotFoundException
    }

    // Kiểm tra xem đã bật 2FA chưa
    if (user.totpSecret) {
      throw TOTPAlreadyEnableException
    }
    // Tạo ra secret và uri
    const { secret, uri } = this.twoFactorAuthService.generateTOTP(user.email)
    // Cập nhật secret vào user trong database

    await this.authRepository.updateUser(
      { id: userId },
      {
        totpSecret: secret,
      },
    )
    // Trả về secret và uri

    return {
      secret,
      uri,
    }
  }
}
