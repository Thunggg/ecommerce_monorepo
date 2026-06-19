import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { ProductController } from './product.controller'
import { productRepo } from './product.repo'
import { ProductService } from './product.service'

@Module({
  controllers: [ProductController],
  providers: [ProductService, productRepo],
  imports: [SharedModule],
})
export class ProductModule {}
