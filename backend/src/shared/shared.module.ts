import { Module } from '@nestjs/common'
import { PrismaService } from './services/prisma.service'
import { HashingService } from './services/hashing.service'

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, HashingService],
  exports: [PrismaService, HashingService],
})
export class SharedModule {}
