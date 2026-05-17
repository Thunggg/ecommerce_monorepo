import { Body, Controller, Post } from '@nestjs/common'
import { RegisterDto, RegisterResponseDto } from './auth.dto'
import { AuthService } from './auth.service'
import { ZodSerializerDto } from 'nestjs-zod'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ZodSerializerDto(RegisterResponseDto)
  async register(@Body() body: RegisterDto) {
    return await this.authService.register(body)
  }
}
