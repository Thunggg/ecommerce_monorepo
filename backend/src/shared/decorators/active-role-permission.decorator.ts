import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { REQUEST_ROLE_PERMISSIONS } from '../constants/auth.constant'
import { RolePermissionType } from '../models/entity.model'

export const ActiveRolePermission = createParamDecorator<keyof RolePermissionType | undefined>(
  (field, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()

    const rolePermissions: RolePermissionType | null = request[REQUEST_ROLE_PERMISSIONS]

    if (!rolePermissions) {
      throw new UnauthorizedException('Error.Unauthorized')
    }

    return field ? rolePermissions?.[field] : rolePermissions
  },
)
