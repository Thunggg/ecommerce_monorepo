import { Controller, Get } from '@nestjs/common'
import { IsPublic } from '../shared/decorators/auth.decorator'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @IsPublic()
  getData() {
    return this.appService.getData()
  }
}
