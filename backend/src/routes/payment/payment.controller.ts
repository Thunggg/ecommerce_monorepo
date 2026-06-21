import { Body, Controller, Post } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { ZodSerializerDto } from 'nestjs-zod'
import { Auth, IsPublic } from '../../shared/decorators/auth.decorator'
import { WebhookPaymentBodyDTO } from './payment.dto'
import { MessageResDTO } from '../category/category-translation/category-translation.dto'

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/receiver')
  @ZodSerializerDto(MessageResDTO)
  @Auth(['ApiKey'])
  receiver(@Body() body: WebhookPaymentBodyDTO) {
    return this.paymentService.receiver(body)
  }
}
