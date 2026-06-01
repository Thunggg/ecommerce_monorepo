import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserRepo } from './user.repo'
import { UsersService } from './user.service'

@Module({
  controllers: [UserController],
  providers: [UsersService, UserRepo],
})
export class UserModule {}
