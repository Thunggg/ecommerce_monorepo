import { createZodDto } from 'nestjs-zod'
import { RegisterBodySchema, RegisterResSchema } from './auth.model'

export class RegisterDto extends createZodDto(RegisterBodySchema) {}
export class RegisterResponseDto extends createZodDto(RegisterResSchema) {}
