import { Injectable } from '@nestjs/common'
import { ALL_LANGUAGE_CODE } from '../../shared/constants/other.constant'
import { PrismaService } from '../../shared/services/prisma.service'
import {
  CreateProductBodyType,
  GetProductDetailResType,
  GetProductsQueryType,
  GetProductsResType,
  ProductType,
  UpdateProductBodyType,
} from './product.model'

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

  async create({
    createdById,
    data,
  }: {
    createdById: number
    data: CreateProductBodyType
  }): Promise<GetProductDetailResType> {
    const { skus, categories, ...productData } = data

    return this.prisma.product.create({
      data: {
        createdById,
        ...productData,
        categories: {
          connect: categories.map((categoryId) => ({ id: categoryId })),
        },
        skus: {
          createMany: {
            data: skus.map((sku) => ({
              ...sku,
              createdById,
            })),
          },
        },
      },
      include: {
        productTranslations: {
          where: {
            deletedAt: null,
          },
        },
        skus: {
          where: {
            deletedAt: null,
          },
        },
        brand: {
          include: {
            brandTranslations: {
              where: {
                deletedAt: null,
              },
            },
          },
        },
        categories: {
          where: {
            deletedAt: null,
          },
          include: {
            categoryTranslations: {
              where: {
                deletedAt: null,
              },
            },
          },
        },
      },
    })
  }

  async update({
    id,
    updatedById,
    data,
  }: {
    id: number
    updatedById: number
    data: UpdateProductBodyType
  }): Promise<ProductType> {
    const { skus: dataSkus, categories, ...productData } = data

    // 1. Lấy danh sách SKU hiện tại trong DB
    const existingSkus = await this.prisma.sKU.findMany({
      where: {
        productId: id,
        deletedAt: null,
      },
    })

    // 2. Tìm các SKUs cần xóa (có trong DB nhưng không có trong data payload)
    const skusToDelete = existingSkus.filter((existingSku) =>
      dataSkus.every((dataSku) => dataSku.value !== existingSku.value),
    )
    const skuIdsToDelete = skusToDelete.map((sku) => sku.id)

    // 3. Mapping ID vào trong data payload
    const existingSku = dataSkus.map((dataSku) => {
      const existingSku = existingSkus.find((existingSku) => existingSku.value === dataSku.value)
      return { ...dataSku, id: existingSku ? existingSku.id : null }
    })

    // 4. Tìm các skus để cập nhật
    const skusToUpdate = existingSku.filter((sku) => sku.id !== null)

    // 5. Tìm các skus để tạo mới
    const skusToCreate = existingSku
      .filter((sku) => sku.id === null)
      .map((sku) => {
        const { id: skuId, ...data } = sku

        return {
          ...data,
          productId: id,
          createdById: updatedById,
        }
      })

    const [product] = await this.prisma.$transaction([
      // Cập nhat thông tin product
      this.prisma.product.update({
        where: {
          id,
          deletedAt: null,
        },
        data: {
          ...productData,
          updatedById,
          categories: {
            set: categories.map((categoryId) => ({ id: categoryId })),
          },
        },
      }),

      // Xóa mềm các SKU không còn trong data payload
      this.prisma.sKU.updateMany({
        where: {
          id: {
            in: skuIdsToDelete,
          },
        },
        data: {
          deletedAt: new Date(),
          deletedById: updatedById,
        },
      }),

      // Cập nhật các SKU có trong data payload
      ...skusToUpdate.map((sku) =>
        this.prisma.sKU.update({
          where: {
            id: sku.id as number,
          },
          data: {
            value: sku.value,
            price: sku.price,
            stock: sku.stock,
            image: sku.image,
            updatedById,
          },
        }),
      ),

      // Tạo mới các SKU ko có trong DB
      ...skusToCreate.map((sku) =>
        this.prisma.sKU.createMany({
          data: skusToCreate,
        }),
      ),
    ])

    return product
  }

  async delete({ id, deletedById }: { id: number; deletedById: number }, isHard: boolean): Promise<ProductType> {
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
