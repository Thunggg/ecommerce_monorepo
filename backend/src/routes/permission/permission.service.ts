import { Injectable } from '@nestjs/common'
import { PermissionRepo } from './permission.repo'
import { CreatePermissionBodyType, GetPermissionsQueryType, UpdatePermissionBodyType } from './permission.model'
import { NotFoundPermissionException, PermissionAlreadyExistException } from './permission.error'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client'

@Injectable()
export class PermissionService {
  constructor(private readonly permissionRepo: PermissionRepo) {}

  async list(value: GetPermissionsQueryType) {
    const data = await this.permissionRepo.list(value)

    return data
  }

  async findById(permissionId: number) {
    const permission = await this.permissionRepo.findById(permissionId)

    if (!permission) {
      throw NotFoundPermissionException
    }
    return permission
  }

  async create({ data, createdById }: { data: CreatePermissionBodyType; createdById: number }) {
    try {
      const newPermission = await this.permissionRepo.create({ createdById, data })

      return newPermission
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw PermissionAlreadyExistException
      }

      throw error
    }
  }

  async update({ data, id, updatedById }: { data: UpdatePermissionBodyType; id: number; updatedById: number }) {
    try {
      const permission = await this.permissionRepo.update({
        id,
        updatedById,
        data,
      })

      return permission
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw PermissionAlreadyExistException
      }

      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw NotFoundPermissionException
      }

      throw error
    }
  }

  async delete({ permissionId, userId }: { permissionId: number; userId: number }) {
    try {
      await this.permissionRepo.delete({ permissionId, userId })

      return {
        message: 'Delete successfully!',
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2005') {
        throw NotFoundPermissionException
      }
      throw error
    }
  }
}
