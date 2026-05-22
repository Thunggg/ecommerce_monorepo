import { Body, Controller, Ip, Post } from '@nestjs/common'
import {
  LoginBodyDTO,
  LoginResponseDto,
  RegisterBodyDTO,
  RegisterResponseDto,
  SendOTPBodyDTO,
  SendOTPResponseDto,
} from './auth.dto'
import { AuthService } from './auth.service'
import { ZodSerializerDto } from 'nestjs-zod'
import { UserAgent } from '../../shared/decorators/user-agent.decorator'

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

  @Post('login')
  @ZodSerializerDto(LoginResponseDto)
  async login(
    @Body() body: LoginBodyDTO & { userAgent: string; ipAddress: string },
    @UserAgent() userAgent: string,
    @Ip() ipAddress: string,
  ) {
    return await this.authService.login({ ...body, userAgent, ipAddress })
  }
}
