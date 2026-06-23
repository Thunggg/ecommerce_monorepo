import { InjectQueue } from '@nestjs/bullmq'
import { Injectable } from '@nestjs/common'
import { Queue } from 'bullmq'
import { PAYMENT_QUEUE_NAME } from '../../shared/constants/queue.constant'
import { generateCancelPaymentJobid } from '../../shared/helper/generate-cancel-payment'

@Injectable()
export class PaymentProducer {
  constructor(@InjectQueue(PAYMENT_QUEUE_NAME) private readonly paymentQueue: Queue) {}

  async removeJob(paymentId: number) {
    return this.paymentQueue.remove(generateCancelPaymentJobid(paymentId))
  }
}
