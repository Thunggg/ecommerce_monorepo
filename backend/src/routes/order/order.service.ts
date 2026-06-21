import { Injectable } from '@nestjs/common'
import { OrderRepo } from './order.repo'
import { GetOrderListQueryType, GetOrderListResType } from './order.model'

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
}
