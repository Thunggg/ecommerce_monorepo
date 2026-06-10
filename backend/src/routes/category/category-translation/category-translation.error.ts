import { UnprocessableEntityException } from '@nestjs/common'

// =============================================================================
// Category Translation errors
// =============================================================================

export const CategoryTranslationAlreadyExistsException = new UnprocessableEntityException([
  { message: 'Error.CategoryTranslationAlreadyExist', path: 'categoryTranslation' },
])
