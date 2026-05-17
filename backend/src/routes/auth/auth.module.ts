import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { RolesService } from './roles.service'
import { SharedModule } from '../../shared/shared.module'

@Module({
  controllers: [AuthController],
  providers: [AuthService, RolesService],
  imports: [SharedModule],
})
export class AuthModule {}
