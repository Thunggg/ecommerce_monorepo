import { UnprocessableEntityException } from '@nestjs/common'

// =============================================================================
// Auth errors
// =============================================================================
export const LanguageAlreadyExistsException = new UnprocessableEntityException({
  message: 'Error.LanguageAlreadyExists',
  path: 'language',
})

export const LanguageValidationNotEmptyException = new UnprocessableEntityException({
  message: 'Error.LanguageValidationNotEmpty',
  path: 'language',
})

export const LanguageNotFoundRecordException = new UnprocessableEntityException({
  message: 'Error.LanguageNotFoundRecord',
  path: 'language',
})
