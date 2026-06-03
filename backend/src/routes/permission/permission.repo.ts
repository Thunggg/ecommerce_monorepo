import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import {
  CreatePermissionBodyType,
  GetPermissionsQueryType,
  GetPermissionsResType,
  UpdatePermissionBodyType,
} from './permission.model'
import { PermissionType } from '../../shared/models/entity.model'

@Injectable()
export class PermissionRepo {
  constructor(private readonly prisma: PrismaService) {}

  async list(pagination: GetPermissionsQueryType): Promise<GetPermissionsResType> {
    const skip = (pagination.page - 1) * pagination.limit
    const take = pagination.limit

    const [totalItems, data] = await Promise.all([
      this.prisma.permission.count({
        where: {
          deletedAt: null,
        },
      }),

      this.prisma.permission.findMany({
        where: {
          deletedAt: null,
        },
        skip,
        take,
      }),
    ])

    return {
      data,
      totalItems,
      page: pagination.page,
      limit: pagination.limit,
      totalPages: Math.ceil(totalItems / pagination.limit),
    }
  }

  async findById(id: number): Promise<PermissionType | null> {
    return this.prisma.permission.findUnique({
      where: {
        deletedAt: null,
        id,
      },
    })
  }

  async create({
    createdById,
    data,
  }: {
    createdById: number | null
    data: CreatePermissionBodyType
  }): Promise<PermissionType> {
    return this.prisma.permission.create({
      data: {
        ...data,
        createdById,
      },
    })
  }

  async update({ data, id, updatedById }: { data: UpdatePermissionBodyType; id: number; updatedById: number }) {
    return this.prisma.permission.update({
      where: {
        id,
        deletedAt: null,
      },
      data: {
        ...data,
        updatedById,
      },
    })
  }

  async delete({ permissionId, userId, isHard }: { permissionId: number; userId: number; isHard?: boolean }) {
    return isHard
      ? this.prisma.permission.delete({
          where: {
            id: permissionId,
          },
        })
      : this.prisma.permission.update({
          where: {
            id: permissionId,
            deletedAt: null,
          },
          data: {
            deletedAt: new Date(),
            deletedById: userId,
          },
        })
  }
}
