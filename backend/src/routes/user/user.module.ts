import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserRepo } from './user.repo'
import { UsersService } from './user.service'
import { SharedModule } from '../../shared/shared.module'

@Module({
  controllers: [UserController],
  providers: [UsersService, UserRepo],
  imports: [SharedModule],
})
export class UserModule {}
