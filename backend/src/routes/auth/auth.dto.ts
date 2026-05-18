import { createZodDto } from 'nestjs-zod'
import { RegisterBodySchema, RegisterResSchema, SendOTPSchema } from './auth.model'
import { MessageResSchema } from '../../shared/models/response.model'

// Register DTOs
export class RegisterBodyDTO extends createZodDto(RegisterBodySchema) {}
export class RegisterResponseDto extends createZodDto(RegisterResSchema) {}

// Send OTP DTOs
export class SendOTPBodyDTO extends createZodDto(SendOTPSchema) {}
export class SendOTPResponseDto extends createZodDto(MessageResSchema) {}
