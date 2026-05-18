import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnprocessableEntityException,
} from '@nestjs/common'
import { RolesService } from './roles.service'
import { HashingService } from '../../shared/services/hashing.service'
import { RegisterBodyType, VerifyCationCodeType } from './auth.model'
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/client'
import { TypeOfVerificationCode } from '../../shared/constants/auth.constant'
import { AuthRepository } from './auth.repo'

@Injectable()
export class AuthService {
  constructor(
    private readonly rolesService: RolesService,
    private readonly hashingService: HashingService,
    private readonly authRepository: AuthRepository,
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
        this.authRepository.deleteVerifycationCode({ email, code, type: TypeOfVerificationCode.REGISTER }),
      ])

      return user
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new UnprocessableEntityException('The email already exists')
      } else if (error instanceof PrismaClientValidationError) {
        throw new ConflictException('The field not be empty')
      } else {
        console.error(error)
        throw new InternalServerErrorException('Failed to register user')
      }
    }
  }

  async validateVerificationCode(uniqueValue: {
    email: string
    code: string
    type: TypeOfVerificationCode
  }): Promise<VerifyCationCodeType> {
    const verifycationOTP = await this.authRepository.findUniqueVerificationCode(uniqueValue)

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
}
