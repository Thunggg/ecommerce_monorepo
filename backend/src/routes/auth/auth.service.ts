import { ConflictException, Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common'
import { RolesService } from './roles.service'
import { HashingService } from '../../shared/services/hashing.service'
import {
  LoginBodyType,
  RefreshTokenBodySchemaType,
  RegisterBodyType,
  SendOTPBodyType,
  UserType,
  VerifyCationCodeType,
} from './auth.model'
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

@Injectable()
export class AuthService {
  constructor(
    private readonly rolesService: RolesService,
    private readonly hashingService: HashingService,
    private readonly authRepository: AuthRepository,
    private readonly emailService: EmailService,
    private readonly tokenService: TokenService,
  ) {}

  async register(body: RegisterBodyType): Promise<Omit<UserType, 'password' | 'totpSecret'>> {
    try {
      const { code, email, name, phoneNumber, password } = body

      // Xác thực mã OTP
      await this.validateVerificationCode({ email, code, type: TypeOfVerificationCode.REGISTER })

      // Hash và lấy client role id
      const [clientRoleId, hashedPassword] = await Promise.all([
        await this.rolesService.getClientRoleId(),
        await this.hashingService.hash(password),
      ])

      // Tạo user
      const [user] = await Promise.all([
        this.authRepository.createUser({
          email: email,
          name: name,
          phoneNumber: phoneNumber,
          password: hashedPassword,
          roleId: clientRoleId,
        }),
        this.authRepository.deleteVerifycationCode({ email, type: TypeOfVerificationCode.REGISTER }),
      ])

      return user
    } catch (error: unknown) {
      console.error(error)

      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new UnprocessableEntityException('The email already exists')
      } else if (error instanceof PrismaClientValidationError) {
        throw new ConflictException('The field not be empty')
      }

      throw error
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
      throw new UnprocessableEntityException({
        message: 'The verification code is invalid',
        path: 'code',
      })
    }

    if (verifycationOTP.expiresAt < new Date()) {
      throw new UnprocessableEntityException({
        message: 'The verification code has expired',
        path: 'code',
      })
    }

    return verifycationOTP
  }

  async sendOTP(body: SendOTPBodyType): Promise<{
    message: string
  }> {
    try {
      // Tìm user theo email
      const user = await this.authRepository.findUserByUniqueValue({ email: body.email })

      // Kiểm tra nếu user đã tồn tại và type là REGISTER
      if (body.type === TypeOfVerificationCode.REGISTER && user) {
        throw new UnprocessableEntityException({
          message: 'The email already exists',
          path: 'email',
        })
      }

      // Kiểm tra nếu user không tồn tại và type là FORGOT_PASSWORD
      if (body.type === TypeOfVerificationCode.FORGOT_PASSWORD && !user) {
        throw new UnprocessableEntityException({
          message: 'The email does not exist',
          path: 'email',
        })
      }

      // Tạo mã OTP
      const code = generateOTP()

      // Tạo verifycation code
      await this.authRepository.createVerifycationCode({
        email: body.email,
        code: code,
        type: body.type,
        expiresAt: addMilliseconds(new Date(), ms(envConfig.OTP_EXPIRES_IN as StringValue)),
      })

      // Gửi email để xác thực
      const { error } = await this.emailService.sendOTP({ email: body.email, code: code })

      if (error) {
        throw new UnprocessableEntityException({
          message: 'Failed to send OTP',
          path: 'email',
        })
      }

      return {
        message: 'OTP sent successfully',
      }
    } catch (error) {
      console.error(error)

      if (error instanceof PrismaClientValidationError) {
        throw new ConflictException('The field not be empty')
      } else if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new UnprocessableEntityException('Email is not exist')
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
        throw new UnprocessableEntityException({
          message: 'The email does not exist',
          path: 'email',
        })
      }

      // Kiểm tra mật khẩu
      const isPasswordValid = await this.hashingService.verify(password, user.password)

      if (!isPasswordValid) {
        throw new UnprocessableEntityException({
          message: 'The password is incorrect',
          path: 'password',
        })
      }

      // Tạo device

      const device = await this.authRepository.createDevice({
        userId: user.id,
        userAgent: userAgent,
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
      console.error(error)

      if (error instanceof PrismaClientValidationError) {
        throw new ConflictException('The field not be empty')
      } else if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new UnprocessableEntityException('Email is not exist')
      }
      throw error
    }
  }

  async refreshToken(payload: RefreshTokenBodySchemaType & { userAgent: string; ipAddress: string }) {
    try {
      // Verify refresh token
      const { userId } = await this.tokenService.verifyRefreshToken(payload.token)

      // kiểm tra refresh token có tồn tại trong DB hay ko
      const refreshTokenIsInDB = await this.authRepository.findUniqueRefreshTokenIncludeUserRole({
        token: payload.token,
      })

      if (!refreshTokenIsInDB) {
        throw new UnauthorizedException('Refreh token has been revoked')
      }

      const {
        deviceId,
        user: {
          roleId,
          role: { name: roleName },
        },
      } = refreshTokenIsInDB

      // cập nhật device
      // xóa refreshToken cũ
      // tạo accessToken và refreshToken mới
      const [, , tokens] = await Promise.all([
        await this.authRepository.updateDevice(deviceId, {
          ip: payload.ipAddress,
          userAgent: payload.userAgent,
        }),
        await this.authRepository.deleteRefreshToken({ token: payload.token }),
        await this.generateToken({
          userId,
          deviceId,
          roleId,
          roleName,
        }),
      ])

      return tokens
    } catch (error: unknown) {
      console.log(error)

      if (error instanceof PrismaClientValidationError) {
        throw new ConflictException('The field not be empty')
      } else if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new UnprocessableEntityException('Email is not exist')
      }
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

    // lưu vào DB
    await this.authRepository.createRefreshToken({
      deviceId: payload.deviceId,
      token: refreshToken,
      userId: payload.userId,
      expiresAt: new Date(decodedRefreshToken.exp * 1000),
    })

    return { accessToken, refreshToken }
  }
}
