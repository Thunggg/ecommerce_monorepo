import { Module } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { AcceptLanguageResolver, HeaderResolver, I18nModule, QueryResolver } from 'nestjs-i18n'
import { ZodSerializerInterceptor } from 'nestjs-zod'
import * as path from 'path'
import { AuthModule } from '../routes/auth/auth.module'
import { BrandTranslationModule } from '../routes/brand/brand-translation/brand-translation.module'
import { BrandModule } from '../routes/brand/brand.module'
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

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(process.cwd(), 'backend/src/i18n'),
        watch: true,
      },
      typesOutputPath: path.join(process.cwd(), 'backend/src/generated/i18n.generated.ts'),
      resolvers: [{ use: QueryResolver, options: ['lang'] }, AcceptLanguageResolver, new HeaderResolver(['x-lang'])],
    }),
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
