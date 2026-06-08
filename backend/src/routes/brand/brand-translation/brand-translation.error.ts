import { UnprocessableEntityException } from '@nestjs/common'

// =============================================================================
// Brand Translation errors
// =============================================================================

export const BrandTranslationAlreadyExistsException = new UnprocessableEntityException([
  { message: 'Error.BrandTranslationAlreadyExist', path: 'brandTranslation' },
])
