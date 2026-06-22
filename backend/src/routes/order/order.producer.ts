import { InjectQueue } from '@nestjs/bullmq'
import { Injectable } from '@nestjs/common'
import { Queue } from 'bullmq'
import { CANCEL_PAYMENT_JOB_NAME, PAYMENT_QUEUE_NAME } from '../../shared/constants/queue.constant'
import { generateCancelPaymentJobid } from '../../shared/helper/generate-cancel-payment'

@Injectable()
export class OrderProducer {
  constructor(@InjectQueue(PAYMENT_QUEUE_NAME) private readonly paymentQueue: Queue) {}

  async addCancelPaymentJob(paymentId: number) {
    return this.paymentQueue.add(
      CANCEL_PAYMENT_JOB_NAME,
      { paymentId },
      {
        delay: 20 * 1000,
        jobId: generateCancelPaymentJobid(paymentId),
        removeOnComplete: true,
        removeOnFail: true,
      },
    )
  }
}
