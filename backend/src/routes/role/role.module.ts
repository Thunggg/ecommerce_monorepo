import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { RoleController } from './role.controller'
import { RolesService } from './roles.service'
import { RoleRepo } from './role.repo'

@Module({
  controllers: [RoleController],
  providers: [RolesService, RoleRepo],
  imports: [SharedModule],
  exports: [RolesService],
})
export class RoleModule {}
