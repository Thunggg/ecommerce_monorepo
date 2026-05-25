import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import { RoleName } from '../../shared/constants/role.constant'
import { RoleType } from './auth.model'

@Injectable()
export class RolesService {
  private clientRoleId: null | number = null
  constructor(private readonly prisma: PrismaService) {}

  async getClientRoleId(): Promise<number> {
    if (this.clientRoleId) return this.clientRoleId

    const role = await this.prisma.$queryRaw<
      RoleType[]
    >`SELECT * FROM "Role" WHERE name = ${RoleName.CLIENT} AND "deletedAt" IS NULL LIMIT 1`

    if (role.length === 0) {
      throw new Error('Client role not found!')
    }

    this.clientRoleId = role[0].id
    return this.clientRoleId
  }
}
