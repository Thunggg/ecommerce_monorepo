import { Module } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ZodSerializerInterceptor } from 'nestjs-zod'
import { AuthModule } from '../routes/auth/auth.module'
import { LanguageModule } from '../routes/language/language.module'
import { UploadModule } from '../routes/media/media.module'
import { PermissionModule } from '../routes/permission/permission.module'
import { ProfileModule } from '../routes/profile/profile.module'
import { RoleModule } from '../routes/role/role.module'
import { UserModule } from '../routes/user/user.module'
import { HttpExceptionFilter } from '../shared/filters/http-exception.filter'
import { MyZodValidationPipe } from '../shared/pipes/custom-zod-validation.pipes'
import { SharedModule } from '../shared/shared.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BrandModule } from '../routes/brand/brand.module'
import { BrandTranslationModule } from '../routes/brand/brand-translation/brand-translation.module'

@Module({
  imports: [
    SharedModule,
    AuthModule,
    LanguageModule,
    PermissionModule,
    RoleModule,
    ProfileModule,
    UserModule,
    UploadModule,
    BrandModule,
    BrandTranslationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: MyZodValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
  ],
})
export class AppModule {}
