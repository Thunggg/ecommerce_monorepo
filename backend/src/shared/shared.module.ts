import { Module } from '@nestjs/common'
import { PrismaService } from './services/prisma.service'
import { HashingService } from './services/hashing.service'
import { EmailService } from './services/email.service'

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, HashingService, EmailService],
  exports: [PrismaService, HashingService, EmailService],
})
export class SharedModule {}
