import { Injectable } from '@nestjs/common'
import { PrismaService } from '../services/prisma.service'
import { PermissionType, RoleType, UserType } from '../models/entity.model'

type WhereUniqueUserType = { id: number; [key: string]: any } | { email: string; [key: string]: any }
type UserIncludeRolePermissionsType = UserType & { role: RoleType & { permissions: PermissionType[] } }

@Injectable()
export class SharedUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  findUnique(where: WhereUniqueUserType): Promise<UserType | null> {
    return this.prisma.user.findUnique({
      where,
    })
  }

  findUniqueIncludeRolePermissions(where: WhereUniqueUserType): Promise<UserIncludeRolePermissionsType | null> {
    return this.prisma.user.findUnique({
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

  update(where: WhereUniqueUserType, data: Partial<UserType>): Promise<UserType | null> {
    return this.prisma.user.update({
      where,
      data,
    })
  }
}
