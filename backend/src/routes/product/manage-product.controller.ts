import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ZodSerializerDto } from 'nestjs-zod'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'
import { MessageResDTO } from '../category/category-translation/category-translation.dto'
import {
  CreateProductBodyDTO,
  GetManageProductsQueryDTO,
  GetProductDetailResDTO,
  GetProductParamsDTO,
  GetProductsResDTO,
  ProductDTO,
  UpdateProductBodyDTO,
} from './product.dto'
import { ManageProductService } from './manage-product.service'
import type { AccessTokenPayload } from '../../shared/types/jwt.type'

@Controller('manage-product/products')
export class ManageProductController {
  constructor(private readonly productService: ManageProductService) {}

  // GET /products?...
  @Get()
  @ZodSerializerDto(GetProductsResDTO)
  list(@Query() query: GetManageProductsQueryDTO, @ActiveUser() user: AccessTokenPayload) {
    return this.productService.list({query, userIdRequest: user.userId, roleNameRequest: user.roleName})
  }

  // GET /products/:productId
  @Get(':productId')
  @ZodSerializerDto(GetProductDetailResDTO)
  findById(@Param() params: GetProductParamsDTO, @ActiveUser() user: AccessTokenPayload) {
    return this.productService.getDetail({productId: params.productId, userIdRequest: user.userId, roleNameRequest: user.roleName})
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
    @ActiveUser() user: AccessTokenPayload,
  ) {
    return this.productService.update({data: body, updatedById: user.userId, productId: params.productId, roleNameRequest: user.roleName})
  }

  // DELETE /products/:productId
  @Delete(':productId')
  @ZodSerializerDto(MessageResDTO)
  delete(@Param() params: GetProductParamsDTO, @ActiveUser() user: AccessTokenPayload) {
    return this.productService.delete({productId: params.productId, deletedById: user.userId, roleNameRequest: user.roleName})
  }
}
