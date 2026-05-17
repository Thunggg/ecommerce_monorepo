import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import { RoleName } from '../../shared/constants/role.constant'

@Injectable()
export class RolesService {
  private clientRoleId: null | number = null
  constructor(private readonly prisma: PrismaService) {}

  async getClientRoleId(): Promise<number> {
    if (this.clientRoleId) return this.clientRoleId

    const role = await this.prisma.role.findFirstOrThrow({
      where: {
        name: RoleName.CLIENT,
      },
    })

    this.clientRoleId = role.id
    return this.clientRoleId
  }
}
