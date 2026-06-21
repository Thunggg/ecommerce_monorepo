import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { envConfig } from '../config/validate'

@Injectable()
export class PaymentAPIKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const rawKey = request.headers['payment-api-key']
    const apiKey = typeof rawKey === 'string' ? rawKey.trim() : undefined

    if (!apiKey) {
      throw new UnauthorizedException('API key is required')
    }
    if (apiKey !== envConfig.PAYMENT_API_KEY) {
      throw new UnauthorizedException('Invalid API key')
    }

    return true
  }
}
