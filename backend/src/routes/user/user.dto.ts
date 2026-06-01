import { createZodDto } from 'nestjs-zod'
import {
  CreateUserBodySchema,
  GetUserParamsSchema,
  GetUserResSchema,
  GetUsersQuerySchema,
  UpdateUserBodySchema,
} from './user.model'
import { UpdateProfileResDTO } from '../profile/profile.dto'

export class GetUserResDTO extends createZodDto(GetUserResSchema) {}

export class GetUsersQueryDTO extends createZodDto(GetUsersQuerySchema) {}

export class GetUserParamsDTO extends createZodDto(GetUserParamsSchema) {}

export class CreateUserBodyDTO extends createZodDto(CreateUserBodySchema) {}

export class UpdateUserBodyDTO extends createZodDto(UpdateUserBodySchema) {}

export class CreateUserResDTO extends UpdateProfileResDTO {}
