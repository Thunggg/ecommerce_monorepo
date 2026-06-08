import { createZodDto } from 'nestjs-zod'
import {
  GetBrandsResSchema,
  GetBrandDetailResSchema,
  GetBrandParamsSchema,
  CreateBrandBodySchema,
  UpdateBrandBodySchema,
} from './brand.model'

// Response DTOs
export class GetBrandsResDTO extends createZodDto(GetBrandsResSchema) {}
export class GetBrandDetailResDTO extends createZodDto(GetBrandDetailResSchema) {}

// Params DTO
export class GetBrandParamsDTO extends createZodDto(GetBrandParamsSchema) {}

// Body DTOs
export class CreateBrandBodyDTO extends createZodDto(CreateBrandBodySchema) {}
export class UpdateBrandBodyDTO extends createZodDto(UpdateBrandBodySchema) {}
