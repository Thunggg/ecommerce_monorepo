import { UnprocessableEntityException } from '@nestjs/common'

// =============================================================================
// Permission errors
// =============================================================================

export const NotFoundProfileException = new UnprocessableEntityException([
  { message: 'Error.NotFoundPermission', path: 'profile' },
])
