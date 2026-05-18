import { ConflictException, Injectable, UnprocessableEntityException } from '@nestjs/common'
import { RolesService } from './roles.service'
import { HashingService } from '../../shared/services/hashing.service'
import { RegisterBodyType, SendOTPBodyType, VerifyCationCodeType } from './auth.model'
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/client'
import { TypeOfVerificationCode } from '../../shared/constants/auth.constant'
import { AuthRepository } from './auth.repo'
import { generateOTP } from '../../shared/helper/generate-otp'
import { addMilliseconds } from 'date-fns'
import { envConfig } from '../../shared/config/validate'
import ms, { StringValue } from 'ms'
import { EmailService } from '../../shared/services/email.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly rolesService: RolesService,
    private readonly hashingService: HashingService,
    private readonly authRepository: AuthRepository,
    private readonly emailService: EmailService,
  ) {}

  async register(body: RegisterBodyType) {
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

  async sendOTP(body: SendOTPBodyType) {
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

      console.log(error)

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
}
