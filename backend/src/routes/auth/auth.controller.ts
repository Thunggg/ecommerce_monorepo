import { Body, Controller, Post } from '@nestjs/common'
import { RegisterBodyDTO, RegisterResponseDto, SendOTPBodyDTO, SendOTPResponseDto } from './auth.dto'
import { AuthService } from './auth.service'
import { ZodSerializerDto } from 'nestjs-zod'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ZodSerializerDto(RegisterResponseDto)
  async register(@Body() body: RegisterBodyDTO) {
    return await this.authService.register(body)
  }

  @Post('otp')
  @ZodSerializerDto(SendOTPResponseDto)
  async sendOTP(@Body() body: SendOTPBodyDTO) {
    return await this.authService.sendOTP(body)
  }
}
