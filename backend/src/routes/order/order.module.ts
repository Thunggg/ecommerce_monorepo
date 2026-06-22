import { BullModule } from '@nestjs/bullmq'
import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { OrderController } from './order.controller'
import { OrderRepo } from './order.repo'
import { OrderService } from './order.service'
import { PAYMENT_QUEUE_NAME } from '../../shared/constants/queue.constant'
import { OrderProducer } from './order.producer'

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderRepo, OrderProducer],
  imports: [
    SharedModule,
    BullModule.registerQueue({
      name: PAYMENT_QUEUE_NAME,
    }),
  ],
})
export class OrderModule {}
