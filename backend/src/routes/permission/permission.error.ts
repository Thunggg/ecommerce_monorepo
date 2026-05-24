import { UnprocessableEntityException } from '@nestjs/common'

// =============================================================================
// Permission errors
// =============================================================================

export const NotFoundPermissionException = new UnprocessableEntityException([
  { message: 'Error.NotFoundPermission', path: 'permission' },
])

export const PermissionAlreadyExistException = new UnprocessableEntityException([
  { message: 'Error.PermissionAlreadyExist', path: 'permission' },
])
