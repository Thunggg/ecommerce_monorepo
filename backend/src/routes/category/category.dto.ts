import { createZodDto } from 'nestjs-zod'
import {
  CreateCategoryBodySchema,
  GetCategoriesQuerySchema,
  GetCategoriesResSchema,
  GetCategoryDetailResSchema,
  GetCategoryParamsSchema,
  UpdateCategoryBodySchema,
} from './category.model'

// Response DTOs
export class GetAllCategoriesResDTO extends createZodDto(GetCategoriesResSchema) {}
export class GetCategoryDetailResDTO extends createZodDto(GetCategoryDetailResSchema) {}

// Query DTO
export class GetAllCategoriesQueryDTO extends createZodDto(GetCategoriesQuerySchema) {}

// Params DTO
export class GetCategoryParamsDTO extends createZodDto(GetCategoryParamsSchema) {}

// Body DTOs
export class CreateCategoryBodyDTO extends createZodDto(CreateCategoryBodySchema) {}
export class UpdateCategoryBodyDTO extends createZodDto(UpdateCategoryBodySchema) {}
