import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '../app/app.module'
import { PrismaService } from '../shared/services/prisma.service'
import { HTTPMethod } from '../shared/constants/role.constant'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
  const server = app.getHttpAdapter().getInstance()
  const router = server.router
  const prisma = new PrismaService()

  const availableRoutes = router.stack
    .map((layer: any) => {
      if (layer.route) {
        const path = layer.route?.path
        const method = layer.route?.stack[0].method.toUpperCase() as keyof typeof HTTPMethod

        return {
          path,
          method,
          name: method + ' ' + path,
        }
      }
    })
    .filter((item: any) => item !== undefined)

  const res = await prisma.permission.createMany({
    data: availableRoutes,
  })

  console.log(res)

  process.exit(0)
}
bootstrap()
