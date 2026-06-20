import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { PermissionController } from './permission.controller'
import { PermissionRepo } from './permission.repo'
import { PermissionService } from './permission.service'

@Module({
  controllers: [PermissionController],
  providers: [PermissionService, PermissionRepo],
  imports: [SharedModule],
})
export class PermissionModule {}
