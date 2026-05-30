import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import { DeviceType, RefreshTokenType, VerifyCationCodeType } from './auth.model'
import { TypeOfVerificationCode } from '../../shared/constants/auth.constant'
import { RoleType, UserType } from '../../shared/models/entity.model'

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

  async createUserIncludRole(
    user: Pick<UserType, 'roleId' | 'email' | 'name' | 'password' | 'phoneNumber' | 'avatar'>,
  ): Promise<(UserType & { role: RoleType }) | null> {
    return await this.prisma.user.create({
      data: user,
      include: {
        role: true,
      },
    })
  }

  async findVerificationCode(value: Pick<VerifyCationCodeType, 'email' | 'type' | 'code'>) {
    return await this.prisma.verificationCode.findFirst({
      where: {
        email: value.email,
        type: value.type,
        code: value.code,
      },
    })
  }

  async deleteVerifycationCode(uniqueValue: { email: string; type: TypeOfVerificationCode }) {
    return await this.prisma.verificationCode.delete({
      where: {
        email_type: uniqueValue,
      },
    })
  }

  async findUserByUniqueValue(uniqueValue: { email: string } | { id: number }): Promise<UserType | null> {
    return this.prisma.user.findUnique({
      where: uniqueValue,
    })
  }

  async createVerifycationCode(
    body: Pick<VerifyCationCodeType, 'email' | 'code' | 'type' | 'expiresAt'>,
  ): Promise<VerifyCationCodeType> {
    return await this.prisma.verificationCode.upsert({
      where: {
        email_type: {
          email: body.email,
          type: body.type,
        },
      },
      update: {
        code: body.code,
        expiresAt: body.expiresAt,
      },
      create: {
        email: body.email,
        code: body.code,
        type: body.type,
        expiresAt: body.expiresAt,
        createdAt: new Date(),
      },
    })
  }

  async findUserIncludeRole(
    uniqueValue: { email: string } | { id: number },
  ): Promise<(UserType & { role: RoleType }) | null> {
    return await this.prisma.user.findUnique({
      where: uniqueValue,
      include: {
        role: true,
      },
    })
  }

  async createDevice(
    body: Pick<DeviceType, 'userId' | 'userAgent' | 'ip'> & Partial<Pick<DeviceType, 'lastActive' | 'isActive'>>,
  ): Promise<DeviceType> {
    return await this.prisma.device.create({
      data: body,
    })
  }

  async createRefreshToken(
    body: Pick<RefreshTokenType, 'deviceId' | 'token' | 'userId' | 'expiresAt'>,
  ): Promise<RefreshTokenType> {
    return await this.prisma.refreshToken.create({
      data: body,
    })
  }

  async findUniqueRefreshTokenIncludeUserRole(uniqueValue: {
    token: string
  }): Promise<(RefreshTokenType & { user: UserType & { role: RoleType } }) | null> {
    return await this.prisma.refreshToken.findUnique({
      where: uniqueValue,
      include: {
        user: {
          include: {
            role: true,
          },
        },
      },
    })
  }

  async updateDevice(deviceId: number, data: Partial<DeviceType>) {
    return await this.prisma.device.update({
      where: {
        id: deviceId,
      },
      data,
    })
  }

  async deleteRefreshToken(uniqueValue: { token: string }): Promise<RefreshTokenType> {
    return await this.prisma.refreshToken.delete({
      where: uniqueValue,
    })
  }

  async updateUser(uniqueValue: { email: string } | { id: number }, data: Partial<Omit<UserType, 'id'>>) {
    return await this.prisma.user.update({
      where: uniqueValue,
      data,
    })
  }
}
