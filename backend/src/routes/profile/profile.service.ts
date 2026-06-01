import { Injectable } from '@nestjs/common'
import { SharedUserRepository } from '../../shared/repositories/shared-user.repo'
import { HashingService } from '../../shared/services/hashing.service'
import { ChangePasswordBodyType, UpdateMeBodyType } from './profile.model'
import { NotFoundProfileException } from './profile.error'
import { InvalidPasswordException } from '../../shared/error/error'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client'

@Injectable()
export class ProfileService {
  constructor(
    private readonly sharedUserRepository: SharedUserRepository,
    private readonly hashingService: HashingService,
  ) {}

  async getProfile(userId: number) {
    const user = await this.sharedUserRepository.findUniqueIncludeRolePermissions({
      id: userId,
    })

    if (!user) {
      throw NotFoundProfileException
    }

    return user
  }

  async updateProfile({ userId, body }: { userId: number; body: UpdateMeBodyType }) {
    try {
      return await this.sharedUserRepository.update(
        { id: userId },
        {
          ...body,
          updatedById: userId,
        },
      )
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw NotFoundProfileException
      }

      throw error
    }
  }

  async changePassword({ userId, body }: { userId: number; body: Omit<ChangePasswordBodyType, 'confirmNewPassword'> }) {
    const { password, newPassword } = body

    const user = await this.sharedUserRepository.findUnique({
      id: userId,
    })

    if (!user) {
      throw NotFoundProfileException
    }

    const isPasswordMatch = await this.hashingService.verify(password, user.password)

    if (!isPasswordMatch) {
      throw InvalidPasswordException
    }

    const hashedPassword = await this.hashingService.hash(newPassword)

    await this.sharedUserRepository.update(
      { id: userId },
      {
        password: hashedPassword,
        updatedById: userId,
      },
    )

    return {
      message: 'Password changed successfully!',
    }
  }
}
