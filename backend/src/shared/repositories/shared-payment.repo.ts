import { Injectable } from '@nestjs/common'
import { PrismaService } from '../services/prisma.service'
import { OrderStatus } from '../constants/oder.constant'
import { PaymentStatus } from '../constants/payment.constant'

@Injectable()
export class SharedPaymentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async cancelPaymentAndOrder(paymentId: number) {
    const payment = await this.prisma.payment.findUnique({
      where: { id: paymentId },
      include: {
        orders: {
          include: {
            items: true,
          },
        },
      },
    })

    if (!payment) throw new Error('Payment not found!')

    const { orders } = payment

    const productSKUSnapshots = orders.map((order) => order.items).flat()
    await this.prisma.$transaction(async (tx) => {
      const updateOrder$ = tx.order.updateMany({
        where: {
          id: {
            in: orders.map((order) => order.id),
          },
          status: OrderStatus.PENDING_PAYMENT,
          deletedAt: null,
        },
        data: {
          status: OrderStatus.CANCELLED,
        },
      })

      const updateSkus$ = Promise.all(
        productSKUSnapshots
          .filter((item) => item.skuId)
          .map((item) =>
            tx.sKU.update({
              where: {
                id: item.skuId as number,
              },
              data: {
                stock: {
                  increment: item.quantity,
                },
              },
            }),
          ),
      )

      const updatePayment$ = Promise.all([
        tx.payment.update({
          where: { id: paymentId },
          data: { status: PaymentStatus.FAILED },
        }),
      ])

      return await Promise.all([updateOrder$, updateSkus$, updatePayment$])
    })
  }
}
