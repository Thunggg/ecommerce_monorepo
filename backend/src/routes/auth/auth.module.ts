import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { RolesService } from './roles.service'
import { SharedModule } from '../../shared/shared.module'
import { AuthRepository } from './auth.repo'

@Module({
  controllers: [AuthController],
  providers: [AuthService, RolesService, AuthRepository],
  imports: [SharedModule],
})
export class AuthModule {}
