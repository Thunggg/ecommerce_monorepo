import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import { SKUSchemaType } from '../../shared/models/shared-sku.model'
import { NotFoundSKUException, OutOfStockSKUException, ProductNotFoundException } from './cart.error'
import {
  AddToCartBodyType,
  CartItemDetailType,
  CartItemType,
  DeleteCartBodyType,
  GetCartResType,
  UpdateCartItemBodyType,
} from './cart.model'
import { ALL_LANGUAGE_CODE } from '../../shared/constants/other.constant'

@Injectable()
export class CartRepo {
  constructor(private readonly prismaService: PrismaService) {}

  private async validateSKU(skuId: number, quantity: number): Promise<SKUSchemaType> {
    const sku = await this.prismaService.sKU.findUnique({
      where: { id: skuId, deletedAt: null },
      include: {
        product: true,
      },
    })

    // Kiểm tra tổn tại của SKU
    if (!sku) {
      throw NotFoundSKUException
    }

    // Kiểm tra luồng hàng còn lại
    if (sku.stock < 1 || sku.stock < quantity) {
      throw OutOfStockSKUException
    }

    const { product } = sku

    // Kiểm tra sản phẩm đã bị xóa hoặc có công khai hay không
    if (
      product.deletedAt !== null ||
      product.publishedAt === null ||
      (product.publishedAt !== null && product.publishedAt > new Date())
    ) {
      throw ProductNotFoundException
    }

    return sku
  }

  async findAll({
    userId,
    languageId,
    page,
    limit,
  }: {
    userId: number
    languageId: string
    page: number
    limit: number
  }): Promise<GetCartResType> {
    const cartItems = await this.prismaService.cartItem.findMany({
      where: {
        userId,
        sku: {
          product: {
            deletedAt: null,
            publishedAt: {
              lte: new Date(),
              not: null,
            },
          },
        },
      },
      include: {
        sku: {
          include: {
            product: {
              include: {
                productTranslations: {
                  where: languageId === ALL_LANGUAGE_CODE ? { deletedAt: null } : { languageId, deletedAt: null },
                },
                createdBy: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    const groupMap = new Map<number, CartItemDetailType>()

    for (const cartItem of cartItems) {
      const shopId = cartItem.sku.product.createdBy.id
      if (shopId) {
        if (!groupMap.has(shopId)) {
          groupMap.set(shopId, {
            shop: cartItem.sku.product.createdBy,
            cartItem: [],
          })
        }

        groupMap.get(shopId)?.cartItem.push(cartItem)
      }
    }

    const sortedGroups = Array.from(groupMap.values())

    const skip = (page - 1) * limit
    const take = limit

    const totalGroup = sortedGroups.length
    const pagedGroups = sortedGroups.slice(skip, skip + take)

    return {
      data: pagedGroups,
      totalItems: totalGroup,
      limit,
      page,
      totalPages: Math.ceil(totalGroup / limit),
    }
  }

  async create(userId: number, body: AddToCartBodyType): Promise<CartItemType> {
    await this.validateSKU(body.skuId, body.quantity)

    return this.prismaService.cartItem.upsert({
      where: {
        userId_skuId: {
          userId,
          skuId: body.skuId,
        },
      },
      update: {
        quantity: body.quantity,
      },
      create: {
        userId,
        skuId: body.skuId,
        quantity: body.quantity,
      },
    })
  }

  async update(cartItemId: number, body: UpdateCartItemBodyType): Promise<CartItemType> {
    await this.validateSKU(body.skuId, body.quantity)

    return this.prismaService.cartItem.update({
      where: {
        id: cartItemId,
      },
      data: {
        skuId: body.skuId,
        quantity: body.quantity,
      },
    })
  }

  async delete(userId: number, body: DeleteCartBodyType): Promise<{ count: number }> {
    return this.prismaService.cartItem.deleteMany({
      where: {
        id: {
          in: body.cartItemIds,
        },
        userId,
      },
    })
  }
}
