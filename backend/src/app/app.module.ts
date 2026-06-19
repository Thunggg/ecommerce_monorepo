import { Module } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { I18nModule } from 'nestjs-i18n'
import { ZodSerializerInterceptor } from 'nestjs-zod'
import * as path from 'path'
import { AuthModule } from '../routes/auth/auth.module'
import { BrandTranslationModule } from '../routes/brand/brand-translation/brand-translation.module'
import { BrandModule } from '../routes/brand/brand.module'
import { CategoryTranslationModule } from '../routes/category/category-translation/category-translation.module'
import { CategoryModule } from '../routes/category/category.module'
import { LanguageModule } from '../routes/language/language.module'
import { UploadModule } from '../routes/media/media.module'
import { PermissionModule } from '../routes/permission/permission.module'
import { ProductTranslationModule } from '../routes/product/product-traslation/product-translation.module'
import { ProductModule } from '../routes/product/product.module'
import { ProfileModule } from '../routes/profile/profile.module'
import { RoleModule } from '../routes/role/role.module'
import { UserModule } from '../routes/user/user.module'
import { HttpExceptionFilter } from '../shared/filters/http-exception.filter'
import { workspaceRoot } from '../shared/helper/workspace'
import { MyZodValidationPipe } from '../shared/pipes/custom-zod-validation.pipes'
import { SharedModule } from '../shared/shared.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(workspaceRoot, 'backend/src/i18n'),
        watch: true,
      },
      typesOutputPath: path.join(workspaceRoot, 'backend/src/generated/i18n.generated.ts'),
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
    CategoryModule,
    CategoryTranslationModule,
    ProductModule,
    ProductTranslationModule,
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
