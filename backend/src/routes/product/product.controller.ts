import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ZodSerializerDto } from 'nestjs-zod'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'
import { IsPublic } from '../../shared/decorators/auth.decorator'
import { MessageResDTO } from '../category/category-translation/category-translation.dto'
import {
  CreateProductBodyDTO,
  GetProductDetailResDTO,
  GetProductParamsDTO,
  GetProductsQueryDTO,
  GetProductsResDTO,
  ProductDTO,
  UpdateProductBodyDTO,
} from './product.dto'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // GET /products?...
  @Get()
  @IsPublic()
  @ZodSerializerDto(GetProductsResDTO)
  list(@Query() query: GetProductsQueryDTO) {
    return this.productService.list(query)
  }

  // GET /products/:productId
  @Get(':productId')
  @IsPublic()
  @ZodSerializerDto(GetProductDetailResDTO)
  findById(@Param() params: GetProductParamsDTO) {
    return this.productService.findById(params.productId)
  }

  // POST /products
  @Post()
  @ZodSerializerDto(GetProductDetailResDTO)
  create(@Body() body: CreateProductBodyDTO, @ActiveUser('userId') userId: number) {
    return this.productService.create({
      data: body,
      createdById: userId,
    })
  }

  // PUT /products/:productId
  @Put(':productId')
  @ZodSerializerDto(ProductDTO)
  update(
    @Body() body: UpdateProductBodyDTO,
    @Param() params: GetProductParamsDTO,
    @ActiveUser('userId') userId: number,
  ) {
    return this.productService.update({
      data: body,
      id: params.productId,
      updatedById: userId,
    })
  }

  // DELETE /products/:productId
  @Delete(':productId')
  @ZodSerializerDto(MessageResDTO)
  delete(@Param() params: GetProductParamsDTO, @ActiveUser('userId') userId: number) {
    return this.productService.delete({
      id: params.productId,
      deletedById: userId,
    })
  }
}
