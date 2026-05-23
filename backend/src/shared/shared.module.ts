import { Module } from '@nestjs/common'
import { PrismaService } from './services/prisma.service'
import { HashingService } from './services/hashing.service'
import { EmailService } from './services/email.service'
import { TokenService } from './services/token.service'
import { JwtModule } from '@nestjs/jwt'
import { envConfig } from './config/validate'
import { APP_GUARD } from '@nestjs/core'
import { AuthenticationGuard } from './guards/authentication.guard'
import { AccessTokenGuard } from './guards/access-token.guard'
import { APIKeyGuard } from './guards/api-key.guard'
import { TwoFactorAuthService } from './services/2fa.service'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: envConfig.ACCESS_TOKEN_SECRET,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
    PrismaService,
    HashingService,
    EmailService,
    TokenService,
    AccessTokenGuard,
    APIKeyGuard,
    TwoFactorAuthService,
  ],
  exports: [PrismaService, HashingService, EmailService, TokenService, TwoFactorAuthService],
})
export class SharedModule {}
