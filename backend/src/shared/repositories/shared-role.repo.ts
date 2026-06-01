import { Injectable } from '@nestjs/common'
import { PrismaService } from '../services/prisma.service'
import { RoleType } from '../models/entity.model'
import { RoleName } from '../constants/role.constant'

@Injectable()
export class SharedRoleRepository {
  private clientRoleId: null | number = null
  private adminRoleId: null | number = null

  constructor(private readonly prisma: PrismaService) {}

  private async getRole(roleName: string) {
    const role = await this.prisma.$queryRaw<
      RoleType[]
    >`SELECT * FROM "Role" WHERE name = ${roleName} AND "deletedAt" IS NULL LIMIT 1`

    if (role.length === 0) {
      throw new Error('Client role not found!')
    }

    return role[0]
  }

  async getClientRoleId() {
    if (this.clientRoleId) return this.clientRoleId

    const role = await this.getRole(RoleName.CLIENT)
    this.clientRoleId = role.id
    return this.clientRoleId
  }

  async getAdminRoleId() {
    if (this.adminRoleId) return this.adminRoleId

    const role = await this.getRole(RoleName.ADMIN)
    this.adminRoleId = role.id
    return this.adminRoleId
  }
}
