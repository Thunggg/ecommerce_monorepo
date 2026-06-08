import { Module } from '@nestjs/common'
import { BrandService } from './brand.service'
import { BrandRepo } from './brand.repo'
import { BrandController } from './brand.controller'
import { SharedModule } from '../../shared/shared.module'

@Module({
  providers: [BrandService, BrandRepo],
  controllers: [BrandController],
  imports: [SharedModule],
})
export class BrandModule {}
