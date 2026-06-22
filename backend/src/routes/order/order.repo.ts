import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import { OrderStatusType } from '../../shared/constants/oder.constant'
import {
  CancelOrderResType,
  CreateOrderBodyType,
  CreateOrderResType,
  GetOrderDetailResType,
  GetOrderListResType,
} from './order.model'
import { OrderStatus, PaymentStatus, Prisma } from '../../generated/prisma/client'
import {
  CannotCancelOrderException,
  NotFoundCartItemException,
  OrderNotFoundException,
  OutOfStockSKUException,
  ProductNotFoundException,
  SKUNotBelongToShopException,
} from './order.error'
import { isNotFoundPrismaError } from '../../shared/helper/error'

@Injectable()
export class OrderRepo {
  constructor(private readonly prisma: PrismaService) {}

  async list({
    limit,
    page,
    userId,
    status,
  }: {
    userId: number
    limit: number
    page: number
    status?: OrderStatusType
  }): Promise<GetOrderListResType> {
    const skip = (page - 1) * limit
    const take = limit

    const where: Prisma.OrderWhereInput = {
      userId,
      status: status as OrderStatus,
    }

    // Đếm tổng số order
    const totalItem$ = this.prisma.order.count({
      where,
    })

    const data$ = this.prisma.order.findMany({
      where,
      include: {
        items: true,
      },
      skip,
      take,
      orderBy: {
        createdAt: 'desc',
      },
    })

    const [totalItems, data] = await Promise.all([totalItem$, data$])

    return {
      data,
      page,
      limit,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
    }
  }

  async create(
    userId: number,
    body: CreateOrderBodyType,
  ): Promise<{ paymentId: number; orders: CreateOrderResType['data'] }> {
    const allBodyCartitemIds = body.map((item) => item.cartItemIds).flat()
    const cartItems = await this.prisma.cartItem.findMany({
      where: {
        id: {
          in: allBodyCartitemIds,
        },
        userId,
      },
      include: {
        sku: {
          include: {
            product: {
              include: {
                productTranslations: true,
              },
            },
          },
        },
      },
    })

    // 1. Kiểm tra xem tất cả cartItemIds có tồn tại trong cơ sở dữ liệu hay không
    if (cartItems.length !== allBodyCartitemIds.length) {
      throw NotFoundCartItemException
    }

    // 2. Kiểm tra số lượng mua có lớn hơn số lượng tồn kho hay không
    const isOutOfStock = cartItems.some((cartItem) => cartItem.quantity > cartItem.sku.stock)
    if (isOutOfStock) {
      throw OutOfStockSKUException
    }

    // 3. Kiểm tra xem tất cả sản phẩm mua có sản phẩm nào bị xóa hay ẩn không
    const isExistNotReadyProduct = cartItems.some(
      (item) =>
        item.sku.product.deletedAt !== null ||
        item.sku.product.publishedAt === null ||
        item.sku.product.publishedAt > new Date(),
    )

    if (isExistNotReadyProduct) {
      throw ProductNotFoundException
    }

    // 4. Kiểm tra xem các skuId trong cartItem gửi lên có thuộc về shopId gửi lên không
    const cartItemMap = new Map<number, (typeof cartItems)[0]>()
    cartItems.forEach((item) => {
      cartItemMap.set(item.id, item)
    })

    const isValidShop = body.every((item) => {
      const bodyCartItemIds = item.cartItemIds
      return bodyCartItemIds.every((cartItemId) => {
        // Neu đã đến bước này thì cartItem luôn luôn có giá trị
        // Vì chúng ta đã so sánh với allBodyCartItems.length ở trên rồi
        const cartItem = cartItemMap.get(cartItemId)!
        return item.shopId === cartItem.sku.product.createdById // giả sử createdById là shopId
      })
    })

    if (!isValidShop) {
      throw SKUNotBelongToShopException
    }

    // 5. Tạo order và xóa cartItem trong transaction để đảm bảo tính toàn vẹn dữ liệu
    const [paymentId, orders] = await this.prisma.$transaction(async (tx) => {
      const payment = await this.prisma.payment.create({
        data: {
          status: PaymentStatus.PENDING,
        },
      })
      const orders$ = Promise.all(
        body.map((item) =>
          tx.order.create({
            data: {
              userId,
              status: OrderStatus.PENDING_PAYMENT,
              receiver: item.receiver,
              createdById: userId,
              shopId: item.shopId,
              paymentId: payment.id,
              items: {
                create: item.cartItemIds.map((cartItemId) => {
                  const cartItem = cartItemMap.get(cartItemId)!
                  return {
                    productName: cartItem.sku.product.name,
                    skuPrice: cartItem.sku.price,
                    image: cartItem.sku.image,
                    skuId: cartItem.sku.id,
                    skuValue: cartItem.sku.value,
                    quantity: cartItem.quantity,
                    productId: cartItem.sku.product.id,
                    productTranslations: cartItem.sku.product.productTranslations.map((translation) => {
                      return {
                        id: translation.id,
                        name: translation.name,
                        description: translation.description,
                        languageId: translation.languageId,
                      }
                    }),
                  }
                }),
              },
              products: {
                connect: item.cartItemIds.map((cartItemId) => {
                  const cartItem = cartItemMap.get(cartItemId)!
                  return { id: cartItem.sku.product.id }
                }),
              },
            },
          }),
        ),
      )

      const cartItem$ = tx.cartItem.deleteMany({
        where: {
          id: {
            in: allBodyCartitemIds,
          },
        },
      })

      const sku$ = Promise.all(
        cartItems.map((item) =>
          tx.sKU.update({
            where: { id: item.sku.id },
            data: { stock: { decrement: item.quantity } },
          }),
        ),
      )

      const [orders] = await Promise.all([orders$, cartItem$, sku$])

      return [payment.id, orders]
    })

    return {
      paymentId,
      orders,
    }
  }

  async detail(userId: number, orderId: number): Promise<GetOrderDetailResType> {
    const order = await this.prisma.order.findUnique({
      where: {
        id: orderId,
        userId,
        deletedAt: null,
      },
      include: {
        items: true,
      },
    })

    if (!order) {
      throw OrderNotFoundException
    }

    return order
  }

  async cancel(userId: number, orderId: number): Promise<CancelOrderResType> {
    try {
      const order = await this.prisma.order.findUnique({
        where: {
          id: orderId,
          userId,
          deletedAt: null,
        },
      })

      if (order?.status !== OrderStatus.PENDING_PAYMENT) {
        throw CannotCancelOrderException
      }

      const updatedOrder = await this.prisma.order.update({
        where: {
          id: orderId,
          userId,
          deletedAt: null,
        },
        data: {
          status: OrderStatus.CANCELLED,
          updatedById: userId,
        },
      })

      return updatedOrder
    } catch (error) {
      if (isNotFoundPrismaError(error)) {
        throw OrderNotFoundException
      }

      throw error
    }
  }
}
