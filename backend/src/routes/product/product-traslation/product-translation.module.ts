import { Module } from '@nestjs/common'
import { SharedModule } from '../../../shared/shared.module'
import { ProductTranslationController } from './product-translation.controller'
import { ProductTranslationRepo } from './product-translation.repo'
import { ProductTranslationService } from './product-translation.service'

@Module({
  controllers: [ProductTranslationController],
  providers: [ProductTranslationService, ProductTranslationRepo],
  imports: [SharedModule],
})
export class ProductTranslationModule {}
