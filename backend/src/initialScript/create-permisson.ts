import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '../app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
  const server = app.getHttpAdapter().getInstance()
  const router = server.router

  const availableRoutes: [] = router.stack
    .map((layer: any) => {
      if (layer.route) {
        return {
          route: {
            path: layer.route?.path,
            method: layer.route?.stack[0].method,
          },
        }
      }
    })
    .filter((item: any) => item !== undefined)
  console.log(availableRoutes)
}
bootstrap()
