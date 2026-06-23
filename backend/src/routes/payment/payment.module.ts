import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { PaymentController } from './payment.controller'
import { PaymentRepo } from './payment.repo'
import { PaymentService } from './payment.service'
import { PaymentProducer } from './payment.producer'
import { BullModule } from '@nestjs/bullmq'
import { PAYMENT_QUEUE_NAME } from '../../shared/constants/queue.constant'

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, PaymentRepo, PaymentProducer],
  imports: [BullModule.registerQueue({ name: PAYMENT_QUEUE_NAME }), SharedModule],
})
export class PaymentModule {}
