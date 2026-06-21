import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { OrderController } from './order.controller'
import { OrderRepo } from './order.repo'
import { OrderService } from './order.service'

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderRepo],
  imports: [SharedModule],
})
export class OrderModule {}
