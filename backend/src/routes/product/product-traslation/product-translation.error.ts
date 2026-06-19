import { UnprocessableEntityException } from '@nestjs/common'

// =============================================================================
// Product Translation errors
// =============================================================================

export const ProductTranslationAlreadyExistsException = new UnprocessableEntityException([
  { message: 'Error.ProductTranslationAlreadyExists', path: 'productTranslation' },
])
