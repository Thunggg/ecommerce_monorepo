import { Injectable } from '@nestjs/common'
import { ALL_LANGUAGE_CODE, OrderByType, SortBy, SortByType } from '../../shared/constants/other.constant'
import { PrismaService } from '../../shared/services/prisma.service'
import {
  CreateProductBodyType,
  GetProductDetailResType,
  GetProductsResType,
  UpdateProductBodyType,
} from './product.model'
import {
  ProductOrderByWithRelationInput,
  ProductWhereInput,
  ProductWhereUniqueInput,
} from '../../generated/prisma/models'
import { ProductType } from '../../shared/models/shared-product.model'
import { CartItemDetailType, GetCartResType } from '../cart/cart.model'
import { Prisma } from '../../generated/prisma/client'

@Injectable()
export class productRepo {
  constructor(private readonly prisma: PrismaService) {}

  async list({
    limit,
    page,
    name,
    brandIds,
    categories,
    minPrice,
    maxPrice,
    createdById,
    isPublic,
    languageId,
    orderBy,
    sortBy,
  }: {
    limit: number
    page: number
    name?: string
    brandIds?: number[]
    categories?: number[]
    minPrice?: number
    maxPrice?: number
    createdById?: number
    isPublic?: boolean
    languageId: string
    orderBy: OrderByType
    sortBy: SortByType
  }): Promise<GetProductsResType> {
    const skip = (page - 1) * limit
    const take = limit

    let where: ProductWhereInput = {
      deletedAt: null,
      createdById: createdById ? createdById : undefined,
    }

    if (isPublic === true) {
      where.publishedAt = {
        lte: new Date(),
        not: null,
      }
    } else if (isPublic === false) {
      where = {
        ...where,
        OR: [{ publishedAt: null }, { publishedAt: { gt: new Date() } }],
      }
    }

    if (name) {
      where.name = {
        contains: name,
        mode: 'insensitive',
      }
    }

    if (brandIds && brandIds.length > 0) {
      where.brandId = {
        in: brandIds,
      }
    }

    if (categories && categories.length > 0) {
      where.categories = {
        some: {
          id: {
            in: categories,
          },
        },
      }
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.basePrice = {
        gte: minPrice,
        lte: maxPrice,
      }
    }

    // Mặc định sort theo createdAt mới nhất
    let caculatedOrderBy: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[] = {
      createdAt: orderBy,
    }

    if (sortBy === SortBy.Price) {
      caculatedOrderBy = {
        basePrice: orderBy,
      }
    } else if (sortBy === SortBy.Sale) {
      caculatedOrderBy = {
        orders: {
          _count: orderBy,
        },
      }
    }

    const [totalItems, data] = await Promise.all([
      this.prisma.product.count({
        where,
      }),
      this.prisma.product.findMany({
        where,
        include: {
          productTranslations: {
            where: languageId === ALL_LANGUAGE_CODE ? { deletedAt: null } : { languageId, deletedAt: null },
          },
          orders: {
            where: {
              deletedAt: null,
              status: 'DELIVERED',
            },
          },
        },
        orderBy: caculatedOrderBy,
        skip,
        take,
      }),
    ])
    return {
      data,
      totalItems,
      page: page,
      limit: limit,
      totalPages: Math.ceil(totalItems / limit),
    }
  }

  async list2({
    userId,
    languageId,
    page,
    limit,
  }: {
    userId: number
    languageId: string
    limit: number
    page: number
  }): Promise<GetCartResType> {
    const skip = (page - 1) * limit
    const take = limit
    // Đếm tổng số nhóm sản phẩm
    const totalItems$ = this.prisma.$queryRaw<{ createdById: number }[]>`
      SELECT
        "Product"."createdById"
      FROM "CartItem"
      JOIN "SKU" ON "CartItem"."skuId" = "SKU"."id"
      JOIN "Product" ON "SKU"."productId" = "Product"."id"
      WHERE "CartItem"."userId" = ${userId}
        AND "Product"."deletedAt" IS NULL
        AND "Product"."publishedAt" IS NOT NULL
        AND "Product"."publishedAt" <= NOW()
      GROUP BY "Product"."createdById"
    `
    const data$ = await this.prisma.$queryRaw<CartItemDetailType[]>`
     SELECT
       "Product"."createdById",
       json_agg(
         jsonb_build_object(
           'id', "CartItem"."id",
           'quantity', "CartItem"."quantity",
           'skuId', "CartItem"."skuId",
           'userId', "CartItem"."userId",
           'createdAt', "CartItem"."createdAt",
           'updatedAt', "CartItem"."updatedAt",
           'sku', jsonb_build_object(
             'id', "SKU"."id",
              'value', "SKU"."value",
              'price', "SKU"."price",
              'stock', "SKU"."stock",
              'image', "SKU"."image",
              'productId', "SKU"."productId",
              'product', jsonb_build_object(
                'id', "Product"."id",
                'publishedAt', "Product"."publishedAt",
                'name', "Product"."name",
                'basePrice', "Product"."basePrice",
                'virtualPrice', "Product"."virtualPrice",
                'brandId', "Product"."brandId",
                'images', "Product"."images",
                'variants', "Product"."variants",
                'productTranslations', COALESCE((
                  SELECT json_agg(
                    jsonb_build_object(
                      'id', pt."id",
                      'productId', pt."productId",
                      'languageId', pt."languageId",
                      'name', pt."name",
                      'description', pt."description"
                    )
                  ) FILTER (WHERE pt."id" IS NOT NULL)
                  FROM "ProductTranslation" pt
                  WHERE pt."productId" = "Product"."id"
                    AND pt."deletedAt" IS NULL
                    ${languageId === ALL_LANGUAGE_CODE ? Prisma.sql`` : Prisma.sql`AND pt."languageId" = ${languageId}`}
                ), '[]'::json)
              )
           )
         ) ORDER BY "CartItem"."updatedAt" DESC
       ) AS "cartItems",
       jsonb_build_object(
         'id', "User"."id",
         'name', "User"."name",
         'avatar', "User"."avatar"
       ) AS "shop"
     FROM "CartItem"
     JOIN "SKU" ON "CartItem"."skuId" = "SKU"."id"
     JOIN "Product" ON "SKU"."productId" = "Product"."id"
     LEFT JOIN "ProductTranslation" ON "Product"."id" = "ProductTranslation"."productId"
       AND "ProductTranslation"."deletedAt" IS NULL
       ${languageId === ALL_LANGUAGE_CODE ? Prisma.sql`` : Prisma.sql`AND "ProductTranslation"."languageId" = ${languageId}`}
     LEFT JOIN "User" ON "Product"."createdById" = "User"."id"
     WHERE "CartItem"."userId" = ${userId}
        AND "Product"."deletedAt" IS NULL
        AND "Product"."publishedAt" IS NOT NULL
        AND "Product"."publishedAt" <= NOW()
     GROUP BY "Product"."createdById", "User"."id"
     ORDER BY MAX("CartItem"."updatedAt") DESC
      LIMIT ${take}
      OFFSET ${skip}
   `
    const [data, totalItems] = await Promise.all([data$, totalItems$])
    return {
      data,
      page,
      limit,
      totalItems: totalItems.length,
      totalPages: Math.ceil(totalItems.length / limit),
    }
  }

  async findById({ productId }: { productId: number }) {
    return this.prisma.product.findUnique({
      where: {
        id: productId,
        deletedAt: null,
      },
    })
  }

  async getDetail({
    productId,
    languageId,
    isPublic,
  }: {
    productId: number
    languageId: string
    isPublic?: boolean
  }): Promise<GetProductDetailResType | null> {
    let where: ProductWhereUniqueInput = {
      id: productId,
      deletedAt: null,
    }

    if (isPublic === true) {
      where.publishedAt = {
        lte: new Date(),
        not: null,
      }
    } else if (isPublic === false) {
      where = {
        ...where,
        OR: [{ publishedAt: null }, { publishedAt: { gt: new Date() } }],
      }
    }

    return this.prisma.product.findUnique({
      where,
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

  // 1) SKU đã tồn tại trong DB nhưng ko có trong payload thì sẽ bị xóa
  // 2) SKU đã tồn tại trong DB nhưng có trong data payload thì sẽ được cập nhật
  // 3) SKU ko tồn tại trong DB nhưng có trong data payload thì sẽ được thêm mới
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
      ...(skusToCreate.length > 0
        ? [
            this.prisma.sKU.createMany({
              data: skusToCreate,
            }),
          ]
        : []),
    ])

    return product
  }

  async delete({ id, deletedById }: { id: number; deletedById: number }, isHard?: boolean): Promise<ProductType> {
    const now = new Date()

    if (isHard) {
      return this.prisma.product.delete({
        where: {
          id,
          deletedAt: null,
        },
      })
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
        this.prisma.productTranslation.updateMany({
          where: {
            productId: id,
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
