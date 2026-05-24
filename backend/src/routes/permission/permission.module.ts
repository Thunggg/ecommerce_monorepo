import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { PermissionController } from './permission.controller'
import { PermissionService } from './permission.service'
import { PermissionRepo } from './permission.repo'

@Module({
  controllers: [PermissionController],
  providers: [PermissionService, PermissionRepo],
  imports: [SharedModule],
})
export class PermissionModule {}
