import { Controller, Get, Param, Query } from '@nestjs/common'
import { ZodSerializerDto } from 'nestjs-zod'
import { IsPublic } from '../../shared/decorators/auth.decorator'
import { GetProductDetailResDTO, GetProductParamsDTO, GetProductsQueryDTO, GetProductsResDTO } from './product.dto'
import { ProductService } from './product.service'
@IsPublic()
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // GET /products?...
  @Get()
  @ZodSerializerDto(GetProductsResDTO)
  list(@Query() query: GetProductsQueryDTO) {
    return this.productService.list({
      query: query,
    })
  }

  // GET /products/:productId
  @Get(':productId')
  @ZodSerializerDto(GetProductDetailResDTO)
  findById(@Param() params: GetProductParamsDTO) {
    return this.productService.getDetail({ productId: params.productId })
  }
}
