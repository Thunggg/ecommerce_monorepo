import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { PaymentController } from './payment.controller'
import { PaymentRepo } from './payment.repo'
import { PaymentService } from './payment.service'

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, PaymentRepo],
  imports: [SharedModule],
})
export class PaymentModule {}
