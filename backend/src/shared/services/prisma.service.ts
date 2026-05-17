import { Injectable } from '@nestjs/common'
import { PrismaClient } from '../../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { envConfig } from '../config/validate'

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({ connectionString: envConfig.DATABASE_URL })
    super({ adapter })
  }
}
