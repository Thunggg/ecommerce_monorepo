import { Body, Controller, Get, Ip, Post, Query, Res } from '@nestjs/common'
import {
  ForgotPasswordBodyDTO,
  GetAuthorizationUrlResDTO,
  LoginBodyDTO,
  LoginResponseDto,
  LogoutBodyDTO,
  RefreshTokenDTO,
  RegisterBodyDTO,
  RegisterResponseDto,
  SendOTPBodyDTO,
  SendOTPResponseDto,
  TwoFactorSetupResDTO,
} from './auth.dto'
import { AuthService } from './auth.service'
import { ZodSerializerDto } from 'nestjs-zod'
import { UserAgent } from '../../shared/decorators/user-agent.decorator'
import { IsPublic } from '../../shared/decorators/auth.decorator'
import type { Response } from 'express'
import { envConfig } from '../../shared/config/validate'
import { MessageResDTO } from '../../shared/dtos/response.dto'
import { EmptyBodyDTO } from '../../shared/dtos/auth.dto'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'

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
  async login(@Body() body: LoginBodyDTO, @UserAgent() userAgent: string, @Ip() ipAddress: string) {
    return await this.authService.login({ ...body, userAgent, ipAddress })
  }

  @Post('refresh-token')
  @IsPublic()
  @ZodSerializerDto(LoginResponseDto)
  async refreshToken(@Body() body: RefreshTokenDTO, @UserAgent() userAgent: string, @Ip() ipAddress: string) {
    return await this.authService.refreshToken({ ...body, userAgent, ipAddress })
  }

  @Get('google-link')
  @IsPublic()
  @ZodSerializerDto(GetAuthorizationUrlResDTO)
  async getGoogleLink(@UserAgent() userAgent: string, @Ip() ip: string) {
    return this.authService.getAuthorizationUrl({ userAgent, ip })
  }

  @Get('google/callback')
  @IsPublic()
  async googleCallback(@Query('code') code: string, @Query('state') state: string, @Res() res: Response) {
    try {
      const data = await this.authService.googleCallback({ code, state })

      return res.redirect(
        `${envConfig.GOOGLE_CLIENT_REDIRECT_URI}?accessToken=${data?.accessToken}&refreshToken=${data?.refreshToken}`,
      )
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Has error when login with google!'
      return res.redirect(`${envConfig.GOOGLE_CLIENT_REDIRECT_URI}?errorMessage=${message}`)
    }
  }

  @Post('logout')
  @ZodSerializerDto(MessageResDTO)
  async logout(@Body() body: LogoutBodyDTO) {
    return this.authService.logout(body.refreshToken)
  }

  @Post('forgot-password')
  @IsPublic()
  @ZodSerializerDto(MessageResDTO)
  async forgotPassword(@Body() body: ForgotPasswordBodyDTO) {
    return this.authService.forgotPassword(body)
  }

  @Post('2fa/setup')
  @IsPublic()
  @ZodSerializerDto(TwoFactorSetupResDTO)
  async setupTwoFactor(@Body() _: EmptyBodyDTO, @ActiveUser('userId') userId: number) {
    return this.authService.setupTwoFactorAuth(userId)
  }
}
