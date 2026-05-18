import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import { UserType } from './auth.model'
import { TypeOfVerificationCode } from '../../shared/constants/auth.constant'

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(
    user: Pick<UserType, 'email' | 'name' | 'phoneNumber' | 'password' | 'roleId'>,
  ): Promise<Omit<UserType, 'password' | 'totpSecret'>> {
    return await this.prisma.user.create({
      data: user,
      omit: {
        password: true,
        totpSecret: true,
      },
    })
  }

  async findUniqueVerificationCode(uniqueValue: { email: string; code: string; type: TypeOfVerificationCode }) {
    return await this.prisma.verificationCode.findUnique({
      where: {
        email_type: uniqueValue,
      },
    })
  }

  async deleteVerifycationCode(uniqueValue: { email: string; code: string; type: TypeOfVerificationCode }) {
    return await this.prisma.verificationCode.delete({
      where: {
        email_type: uniqueValue,
      },
    })
  }
}
