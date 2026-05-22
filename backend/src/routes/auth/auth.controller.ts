import { Body, Controller, Ip, Post } from '@nestjs/common'
import {
  LoginBodyDTO,
  LoginResponseDto,
  RefreshTokenDTO,
  RegisterBodyDTO,
  RegisterResponseDto,
  SendOTPBodyDTO,
  SendOTPResponseDto,
} from './auth.dto'
import { AuthService } from './auth.service'
import { ZodSerializerDto } from 'nestjs-zod'
import { UserAgent } from '../../shared/decorators/user-agent.decorator'
import { IsPublic } from '../../shared/decorators/auth.decorator'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @IsPublic()
  @ZodSerializerDto(RegisterResponseDto)
  async register(@Body() body: RegisterBodyDTO) {
    return await this.authService.register(body)
  }

  @Post('otp')
  @IsPublic()
  @ZodSerializerDto(SendOTPResponseDto)
  async sendOTP(@Body() body: SendOTPBodyDTO) {
    return await this.authService.sendOTP(body)
  }

  @Post('login')
  @IsPublic()
  @ZodSerializerDto(LoginResponseDto)
  async login(
    @Body() body: LoginBodyDTO & { userAgent: string; ipAddress: string },
    @UserAgent() userAgent: string,
    @Ip() ipAddress: string,
  ) {
    return await this.authService.login({ ...body, userAgent, ipAddress })
  }

  @Post('refresh-token')
  @IsPublic()
  @ZodSerializerDto(LoginResponseDto)
  async refreshToken(
    @Body() body: RefreshTokenDTO & { userAgent: string; ipAddress: string },
    @UserAgent() userAgent: string,
    @Ip() ipAddress: string,
  ) {
    return await this.authService.refreshToken({ ...body, userAgent, ipAddress })
  }
}
