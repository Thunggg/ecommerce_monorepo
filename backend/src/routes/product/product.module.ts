import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { ManageProductController } from './manage-product.controller'
import { ManageProductService } from './manage-product.service'
import { ProductController } from './product.controller'
import { productRepo } from './product.repo'
import { ProductService } from './product.service'

@Module({
  controllers: [ProductController, ManageProductController],
  providers: [ProductService, ManageProductService, productRepo],
  imports: [SharedModule],
})
export class ProductModule {}
