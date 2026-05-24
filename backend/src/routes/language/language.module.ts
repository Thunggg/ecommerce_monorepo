import { Module } from '@nestjs/common'
import { SharedModule } from '../../shared/shared.module'
import { LanguageController } from './language.controller'
import { LanguageService } from './language.service'
import { LanguageRepo } from './language.repo'

@Module({
  controllers: [LanguageController],
  providers: [LanguageService, LanguageRepo],
  imports: [SharedModule],
})
export class LanguageModule {}
