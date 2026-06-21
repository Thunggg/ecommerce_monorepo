import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ZodSerializerDto } from 'nestjs-zod'
import { OrderService } from './order.service'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'
import {
  CancelOrderBodyDTO,
  CancelOrderResDTO,
  CreateOrderBodyDTO,
  CreateOrderResDTO,
  GetOrderDetailResDTO,
  GetOrderListQueryDTO,
  GetOrderListResDTO,
} from './order.dto'

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @ZodSerializerDto(GetOrderListResDTO)
  getOrderList(@ActiveUser('userId') userId: number, @Query() query: GetOrderListQueryDTO) {
    return this.orderService.list({ ...query, userId })
  }

  @Post()
  @ZodSerializerDto(CreateOrderResDTO)
  createOrder(@ActiveUser('userId') userId: number, @Body() body: CreateOrderBodyDTO) {
    return this.orderService.create(userId, body)
  }

  @Get(':orderId')
  @ZodSerializerDto(GetOrderDetailResDTO)
  getOrderDetail(@ActiveUser('userId') userId: number, @Param('orderId') orderId: number) {
    return this.orderService.detail(userId, orderId)
  }

  @Put(':orderId')
  @ZodSerializerDto(CancelOrderResDTO)
  cancelOrder(@ActiveUser('userId') userId: number, @Param('orderId') orderId: number, @Body() _: CancelOrderBodyDTO) {
    return this.orderService.cancel(userId, orderId)
  }
}
