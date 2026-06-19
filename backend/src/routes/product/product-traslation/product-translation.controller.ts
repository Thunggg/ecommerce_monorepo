import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ZodSerializerDto } from 'nestjs-zod'
import { ActiveUser } from '../../../shared/decorators/active-user.decorator'
import { MessageResDTO } from '../../category/category-translation/category-translation.dto'
import {
  CreateProductTranslationBodyDTO,
  GetProductTranslationDetailResDTO,
  GetProductTranslationParamsDTO,
  UpdateProductTranslationBodyDTO,
} from './product-translation.dto'
import { ProductTranslationService } from './product-translation.service'

@Controller('product-translations')
export class ProductTranslationController {
  constructor(private readonly productTranslationService: ProductTranslationService) {}

  // GET /product-translations/:productTranslationId
  @Get(':productTranslationId')
  @ZodSerializerDto(GetProductTranslationDetailResDTO)
  findById(@Param() params: GetProductTranslationParamsDTO) {
    return this.productTranslationService.findById(params.productTranslationId)
  }

  // POST /product-translations
  @Post()
  @ZodSerializerDto(GetProductTranslationDetailResDTO)
  create(@Body() body: CreateProductTranslationBodyDTO, @ActiveUser('userId') userId: number) {
    return this.productTranslationService.create({
      data: body,
      createdById: userId,
    })
  }

  // PUT /product-translations/:productTranslationId
  @Put(':productTranslationId')
  @ZodSerializerDto(GetProductTranslationDetailResDTO)
  update(
    @Body() body: UpdateProductTranslationBodyDTO,
    @Param() params: GetProductTranslationParamsDTO,
    @ActiveUser('userId') userId: number,
  ) {
    return this.productTranslationService.update({
      data: body,
      id: params.productTranslationId,
      updatedById: userId,
    })
  }

  // DELETE /product-translations/:productTranslationId
  @Delete(':productTranslationId')
  @ZodSerializerDto(MessageResDTO)
  delete(@Param() params: GetProductTranslationParamsDTO, @ActiveUser('userId') userId: number) {
    return this.productTranslationService.delete({
      id: params.productTranslationId,
      deletedById: userId,
    })
  }
}
