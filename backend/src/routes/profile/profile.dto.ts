import { createZodDto } from 'nestjs-zod'
import {
  ChangePasswordBodySchema,
  GetUserProfileResSchema,
  UpdateMeBodySchema,
  UpdateProfileResSchema,
} from './profile.model'

export class GetUserProfileResDTO extends createZodDto(GetUserProfileResSchema) {}
export class UpdateProfileResDTO extends createZodDto(UpdateProfileResSchema) {}

export class UpdateMeBodyDTO extends createZodDto(UpdateMeBodySchema) {}
export class ChangePasswordBodyDTO extends createZodDto(ChangePasswordBodySchema) {}
