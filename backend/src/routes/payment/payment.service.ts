import { Injectable } from '@nestjs/common'
import { PaymentRepo } from './payment.repo'
import { WebhookPaymentBodyType } from './payment.model'
import { MessageResType } from '../../shared/models/response.model'

@Injectable()
export class PaymentService {
  constructor(private readonly paymentRepo: PaymentRepo) {}

  async receiver(body: WebhookPaymentBodyType): Promise<MessageResType> {
    const message = await this.paymentRepo.receiver(body)
    return message
  }
}
