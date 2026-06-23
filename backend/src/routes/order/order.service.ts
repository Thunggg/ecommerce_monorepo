import { Injectable } from '@nestjs/common'
import { OrderRepo } from './order.repo'
import {
  CancelOrderResType,
  CreateOrderBodyType,
  GetOrderDetailResType,
  GetOrderListQueryType,
  GetOrderListResType,
} from './order.model'

@Injectable()
export class OrderService {
  constructor(private readonly orderRepo: OrderRepo) {}

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

  async create(userId: number, body: CreateOrderBodyType) {
    const result = await this.orderRepo.create(userId, body)
    return result
  }

  async detail(userId: number, orderId: number): Promise<GetOrderDetailResType> {
    return this.orderRepo.detail(userId, orderId)
  }

  async cancel(userId: number, orderId: number): Promise<CancelOrderResType> {
    return this.orderRepo.cancel(userId, orderId)
  }
}
