import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../../shared/services/prisma.service'
import {
  CreateProductTranslationBodyType,
  GetProductTranslationDetailResType,
  UpdateProductTranslationBodyType,
} from './product-translation.model'
import { ProductTranslationType } from '../../../shared/models/shared-product-translation.model'

@Injectable()
export class ProductTranslationRepo {
  constructor(private prismaService: PrismaService) {}

  // Tìm bản ghi theo id (chưa bị xóa mềm)
  findById(id: number): Promise<GetProductTranslationDetailResType | null> {
    return this.prismaService.productTranslation.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    })
  }

  // Tạo mới bản dịch sản phẩm
  create({
    createdById,
    data,
  }: {
    createdById: number | null
    data: CreateProductTranslationBodyType
  }): Promise<ProductTranslationType> {
    return this.prismaService.productTranslation.create({
      data: {
        ...data,
        createdById,
      },
    })
  }

  // Cập nhật bản dịch sản phẩm (chỉ cập nhật bản ghi chưa bị xóa)
  async update({
    id,
    updatedById,
    data,
  }: {
    id: number
    updatedById: number
    data: UpdateProductTranslationBodyType
  }): Promise<ProductTranslationType> {
    return this.prismaService.productTranslation.update({
      where: {
        id,
        deletedAt: null,
      },
      data: {
        ...data,
        updatedById,
      },
    })
  }

  // Xóa bản dịch sản phẩm (cứng hoặc mềm)
  async delete({
    id,
    deletedById,
    isHard = false,
  }: {
    id: number
    deletedById: number
    isHard?: boolean
  }): Promise<ProductTranslationType> {
    if (isHard) {
      // Xóa cứng
      return this.prismaService.productTranslation.delete({
        where: {
          id,
        },
      })
    } else {
      // Xóa mềm: cập nhật deletedAt và deletedById
      return this.prismaService.productTranslation.update({
        where: {
          id,
          deletedAt: null, // chỉ cho phép xóa nếu chưa bị xóa
        },
        data: {
          deletedAt: new Date(),
          deletedById,
        },
      })
    }
  }
}
