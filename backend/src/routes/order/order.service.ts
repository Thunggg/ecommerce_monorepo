import { Injectable } from '@nestjs/common'
import { OrderRepo } from './order.repo'
import { CreateOrderBodyType, CreateOrderResType, GetOrderListQueryType, GetOrderListResType } from './order.model'

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

  async create(userId: number, body: CreateOrderBodyType): Promise<CreateOrderResType> {
    return this.orderRepo.create(userId, body)
  }
}
