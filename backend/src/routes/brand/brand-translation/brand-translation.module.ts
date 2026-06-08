import { Module } from '@nestjs/common'
import { BrandTranslationRepo } from './brand-translation.repo'
import { BrandTranslationService } from './brand-translation.service'
import { BrandTranslationController } from './brand-translation.controller'
import { SharedModule } from '../../../shared/shared.module'

@Module({
  providers: [BrandTranslationRepo, BrandTranslationService],
  controllers: [BrandTranslationController],
  imports: [SharedModule],
})
export class BrandTranslationModule {}
