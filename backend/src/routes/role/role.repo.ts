// ==================== Imports ====================
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import {
  CreateRoleBodyType,
  GetRolesQueryType,
  GetRolesResType,
  RoleType,
  RoleWithPermissionsType,
  UpdateRoleBodyType,
} from './role.model'

@Injectable()
export class RoleRepo {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Lấy danh sách roles có phân trang
   */
  async list(pagination: GetRolesQueryType): Promise<GetRolesResType> {
    const skip = (pagination.page - 1) * pagination.limit
    const take = pagination.limit

    const [totalItems, data] = await Promise.all([
      this.prismaService.role.count({
        where: {
          deletedAt: null,
        },
      }),
      this.prismaService.role.findMany({
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

  /**
   * Tìm role theo id (kèm permissions)
   */
  async findById(id: number): Promise<RoleWithPermissionsType | null> {
    return this.prismaService.role.findUnique({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        permissions: true,
      },
    })
  }

  create({ createdById, data }: { createdById: number | null; data: CreateRoleBodyType }) {
    return this.prismaService.role.create({
      data: {
        ...data,
        createdById,
      },
    })
  }

  /**
   * Cập nhật role
   * @param param0 id, updatedById, data (có thể chứa permissionIds)
   */
  async update({
    id,
    updatedById,
    data,
  }: {
    id: number
    updatedById: number
    data: UpdateRoleBodyType
  }): Promise<RoleType> {
    return this.prismaService.role.update({
      where: {
        id,
        deletedAt: null,
      },
      data: {
        name: data.name,
        description: data.description,
        isActive: data.isActive,
        updatedById,
        permissions: {
          set: data.permissionIds.map((permissionId) => ({ id: permissionId })),
        },
      },
      include: {
        permissions: true,
      },
    })
  }

  /**
   * Xóa role (soft delete hoặc hard delete)
   * @param id - ID của role
   * @param deletedById - ID người thực hiện xóa (dùng cho soft delete)
   * @param isHard - true: xóa vĩnh viễn, false: soft delete (mặc định false)
   */
  async delete({ id, deletedById, isHard }: { id: number; deletedById: number; isHard?: boolean }): Promise<RoleType> {
    return isHard
      ? this.prismaService.role.delete({
          where: {
            id,
          },
        })
      : this.prismaService.role.update({
          where: {
            id,
          },
          data: {
            deletedAt: new Date(),
            deletedById,
          },
        })
  }
}
