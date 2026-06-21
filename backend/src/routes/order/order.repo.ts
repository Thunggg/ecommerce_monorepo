import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import { OrderStatusType } from '../../shared/constants/oder.constant'
import { GetOrderListResType } from './order.model'
import { OrderStatus, Prisma } from '../../generated/prisma/client'

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
}
