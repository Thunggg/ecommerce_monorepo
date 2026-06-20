import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { LanguageController } from './language.controller'
import { LanguageRepo } from './language.repo'
import { LanguageService } from './language.service'

@Module({
  controllers: [LanguageController],
  providers: [LanguageService, LanguageRepo],
  imports: [SharedModule],
})
export class LanguageModule {}
