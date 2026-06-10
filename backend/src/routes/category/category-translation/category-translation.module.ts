import { Module } from '@nestjs/common'
import { SharedModule } from '../../../shared/shared.module'
import { CategoryTranslationController } from './category-translation.controller'
import { CategoryTranslationRepo } from './category-translation.repo'
import { CategoryTranslationService } from './category-translation.service'

@Module({
  providers: [CategoryTranslationService, CategoryTranslationRepo],
  controllers: [CategoryTranslationController],
  imports: [SharedModule],
})
export class CategoryTranslationModule {}
