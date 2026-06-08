import { createZodDto } from 'nestjs-zod'
import {
  CreateBrandTranslationBodySchema,
  GetBrandTranslationDetailResSchema,
  GetBrandTranslationParamsSchema,
  UpdateBrandTranslationBodySchema,
} from './brand-translation.model'

// Param DTOs
export class GetBrandTranslationParamsDTO extends createZodDto(GetBrandTranslationParamsSchema) {}

// Response DTOs
export class GetBrandTranslationDetailResDTO extends createZodDto(GetBrandTranslationDetailResSchema) {}

// Body DTOs
export class CreateBrandTranslationBodyDTO extends createZodDto(CreateBrandTranslationBodySchema) {}
export class UpdateBrandTranslationBodyDTO extends createZodDto(UpdateBrandTranslationBodySchema) {}
