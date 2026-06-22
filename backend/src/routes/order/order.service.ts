import { Injectable } from '@nestjs/common'
import { OrderRepo } from './order.repo'
import {
  CancelOrderResType,
  CreateOrderBodyType,
  CreateOrderResType,
  GetOrderDetailResType,
  GetOrderListQueryType,
  GetOrderListResType,
} from './order.model'
import { OrderProducer } from './order.producer'

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepo: OrderRepo,
    private readonly orderProducer: OrderProducer,
  ) {}

  async list({
    limit,
    page,
    userId,
    status,
  }: GetOrderListQueryType & {
    userId: number
  }): Promise<GetOrderListResType> {
    return this.orderRepo.list({ limit, page, userId, status })
  }

  async create(userId: number, body: CreateOrderBodyType): Promise<CreateOrderResType> {
    const result = await this.orderRepo.create(userId, body)
    await this.orderProducer.addCancelPaymentJob(result.paymentId)
    return { data: result.orders }
  }

  async detail(userId: number, orderId: number): Promise<GetOrderDetailResType> {
    return this.orderRepo.detail(userId, orderId)
  }

  async cancel(userId: number, orderId: number): Promise<CancelOrderResType> {
    return this.orderRepo.cancel(userId, orderId)
  }
}
