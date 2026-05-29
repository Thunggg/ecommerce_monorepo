import { ForbiddenException, UnprocessableEntityException } from '@nestjs/common'

// =============================================================================
// Auth errors
// =============================================================================

export const RoleNotFoundException = new UnprocessableEntityException([{ message: 'Error.RoleNotFound', path: 'role' }])

export const RoleAlreadyExistException = new UnprocessableEntityException([
  { message: 'Error.RoleAlreadyExist', path: 'role' },
])

export const RoleValidationNotEmptyException = new UnprocessableEntityException([
  { message: 'Error.RoleValidationNotEmpty', path: 'role' },
])

export const NotFoundRoleException = new UnprocessableEntityException([{ message: 'Error.NotFoundRole', path: 'role' }])

export const ProhibitedActionOnBaseRoleException = new ForbiddenException([
  { message: 'Error.ProhibitedActionOnBaseRole', path: 'role' },
])
