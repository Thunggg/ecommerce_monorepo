import { Injectable } from '@nestjs/common'
import { PrismaService } from '../services/prisma.service'
import { PermissionType, RoleType, UserType } from '../models/entity.model'

export type WhereUniqueUserType = { id: number } | { email: string }
type UserIncludeRolePermissionsType = UserType & { role: RoleType & { permissions: PermissionType[] } }

@Injectable()
export class SharedUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(where: WhereUniqueUserType): Promise<UserType | null> {
    return this.prisma.user.findFirst({
      where,
    })
  }

  findUniqueIncludeRolePermissions(where: WhereUniqueUserType): Promise<UserIncludeRolePermissionsType | null> {
    return this.prisma.user.findFirst({
      where,
      include: {
        role: {
          include: {
            permissions: {
              where: {
                deletedAt: null,
              },
            },
          },
        },
      },
    })
  }

  update(where: { id: number }, data: Partial<UserType>): Promise<UserType | null> {
    return this.prisma.user.update({
      where: {
        ...where,
        deletedAt: null,
      },
      data,
    })
  }
}
