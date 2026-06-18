import { Injectable } from '@nestjs/common'
import { ALL_LANGUAGE_CODE } from '../../shared/constants/other.constant'
import { PrismaService } from '../../shared/services/prisma.service'
import { GetProductDetailResType, GetProductsQueryType, GetProductsResType, ProductType } from './product.model'

@Injectable()
export class productRepo {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: GetProductsQueryType, languageId: string): Promise<GetProductsResType> {
    const skip = (query.page - 1) * query.limit
    const take = query.limit
    const [totalItems, data] = await Promise.all([
      this.prisma.product.count({
        where: {
          deletedAt: null,
        },
      }),
      this.prisma.product.findMany({
        where: {
          deletedAt: null,
        },
        include: {
          productTranslations: {
            where: languageId === ALL_LANGUAGE_CODE ? { deletedAt: null } : { languageId, deletedAt: null },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take,
      }),
    ])
    return {
      data,
      totalItems,
      page: query.page,
      limit: query.limit,
      totalPages: Math.ceil(totalItems / query.limit),
    }
  }

  async findById(id: number, languageId: string): Promise<GetProductDetailResType | null> {
    return this.prisma.product.findUnique({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        productTranslations: {
          where: languageId === ALL_LANGUAGE_CODE ? { deletedAt: null } : { languageId, deletedAt: null },
        },
        skus: {
          where: {
            deletedAt: null,
          },
        },
        brand: {
          include: {
            brandTranslations: {
              where: languageId === ALL_LANGUAGE_CODE ? { deletedAt: null } : { languageId, deletedAt: null },
            },
          },
        },
        categories: {
          where: {
            deletedAt: null,
          },
          include: {
            categoryTranslations: {
              where: languageId === ALL_LANGUAGE_CODE ? { deletedAt: null } : { languageId, deletedAt: null },
            },
          },
        },
      },
    })
  }

  async delete({ id, deletedById }: { id: number; deletedById: number }, isHard: boolean): Promise<ProductType | null> {
    const now = new Date()

    if (isHard) {
      const [product] = await Promise.all([
        this.prisma.product.delete({
          where: {
            id,
            deletedAt: null,
          },
        }),
        this.prisma.sKU.deleteMany({
          where: {
            productId: id,
            deletedAt: null,
          },
        }),
      ])
      return product
    } else {
      const [product] = await Promise.all([
        this.prisma.product.update({
          where: {
            id,
            deletedAt: null,
          },
          data: {
            deletedAt: now,
            deletedById,
          },
        }),
        this.prisma.sKU.updateMany({
          where: {
            productId: id,
            deletedAt: null,
          },
          data: {
            deletedAt: now,
            deletedById,
          },
        }),
      ])
      return product
    }
  }
}
