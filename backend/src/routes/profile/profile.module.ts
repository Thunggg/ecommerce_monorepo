import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { ProfileService } from './profile.service'
import { ProfileController } from './profile.controller'

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [SharedModule],
  exports: [ProfileService],
})
export class ProfileModule {}
