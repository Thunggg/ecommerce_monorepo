import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { CartController } from './cart.controller'
import { CartService } from './cart.service'
import { CartRepo } from './cart.repo'

@Module({
  controllers: [CartController],
  providers: [CartService, CartRepo],
  imports: [SharedModule],
})
export class CartModule {}
