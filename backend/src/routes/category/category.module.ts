import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { CategoryController } from './category.controller'
import { CategoryRepo } from './category.repo'
import { CategoryService } from './category.service'

@Module({
  providers: [CategoryService, CategoryRepo],
  controllers: [CategoryController],
  imports: [SharedModule],
})
export class CategoryModule {}
