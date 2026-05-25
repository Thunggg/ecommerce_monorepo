import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { SharedModule } from '../../shared/shared.module'
import { AuthRepository } from './auth.repo'
import { RoleModule } from '../role/role.module'

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
  imports: [SharedModule, RoleModule],
})
export class AuthModule {}
