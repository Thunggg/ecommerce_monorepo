import { createZodDto } from 'nestjs-zod'
import { MessageResSchema } from '../../../shared/models/response.model' // nếu có
import {
  CreateCategoryTranslationBodySchema,
  GetCategoryTranslationDetailResSchema,
  GetCategoryTranslationParamsSchema,
  UpdateCategoryTranslationBodySchema,
} from './category-translation.model'

// Params DTO
export class GetCategoryTranslationParamsDTO extends createZodDto(GetCategoryTranslationParamsSchema) {}

// Response DTOs
export class GetCategoryTranslationDetailResDTO extends createZodDto(GetCategoryTranslationDetailResSchema) {}

// Body DTOs
export class CreateCategoryTranslationBodyDTO extends createZodDto(CreateCategoryTranslationBodySchema) {}
export class UpdateCategoryTranslationBodyDTO extends createZodDto(UpdateCategoryTranslationBodySchema) {}

// Message response (nếu chưa có ở shared)
export class MessageResDTO extends createZodDto(MessageResSchema) {}
