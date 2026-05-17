import { Injectable } from '@nestjs/common'
import { envConfig } from '../shared/config/validate'

@Injectable()
export class AppService {
  getData(): { message: string } {
    const databaseUrl = envConfig.DATABASE_URL
    return { message: databaseUrl }
  }
}
