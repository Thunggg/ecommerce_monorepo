import { NestFactory } from '@nestjs/core'
import 'dotenv/config'
import { AppModule } from '../app/app.module'
import { HTTPMethod, RoleName } from '../shared/constants/role.constant'
import { PrismaService } from '../shared/services/prisma.service'

const prisma = new PrismaService()

const sellerModule = ['AUTH', 'MEDIA', 'PRODUCT', 'MANAGE-PRODUCT', 'PRODUCT-TRANSLATION', 'PROFILE', 'CART', 'ORDERS']
const clientModule = ['AUTH', 'MEDIA', 'CART', 'PROFILE', 'ORDERS']

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
  const server = app.getHttpAdapter().getInstance()
  const router = server.router

  // Query vào DB để lấy ra danh sách các permission
  const permissionInDB = await prisma.permission.findMany({
    where: {
      deletedAt: null,
    },
  })

  const availableRoutes: { path: string; method: keyof typeof HTTPMethod; name: string; module: string }[] =
    router.stack
      .map((layer: any) => {
        if (layer.route) {
          const path = layer.route?.path
          const method = layer.route?.stack[0].method.toUpperCase() as keyof typeof HTTPMethod
          const moduleName = String(path.split('/')[1]).toUpperCase()

          return {
            path,
            method,
            name: method + ' ' + path,
            module: moduleName,
          }
        }
        return undefined
      })
      .filter((item: any) => item !== undefined)

  // tạo biến để check xem có update hoặc create ko
  let isUpdateOrDeletePermission = false

  // Tạo object permissionInDB với key là [method-path]
  const permissionInDBMap = permissionInDB.reduce<Record<string, (typeof permissionInDB)[number]>>((acc, item) => {
    acc[`${item.path}-${item.method}`] = item

    return acc
  }, {})

  // Tạo object permissionInDB với key là [method-path]
  const availableRoutesMap = availableRoutes.reduce<Record<string, (typeof availableRoutes)[number]>>((acc, item) => {
    acc[`${item.path}-${item.method}`] = item

    return acc
  }, {})

  // Tìm permission trong db mà không tồn tại trong availableRoutes
  const permissionToDelete = permissionInDB.filter((item) => {
    return !availableRoutesMap[`${item.path}-${item.method}`]
  })

  if (permissionToDelete.length > 0) {
    isUpdateOrDeletePermission = true

    const resOfDeletePermission = await prisma.permission.deleteMany({
      where: {
        id: {
          in: permissionToDelete.map((item) => item.id),
        },
      },
    })

    console.log('Delete permission: ', resOfDeletePermission.count)
  }

  // Tìm permission có trong availableRoutes mà hiện tại chưa có trong database
  const permissionToUpdate = availableRoutes.filter((item) => {
    return !permissionInDBMap[`${item.path}-${item.method}`]
  })

  if (permissionToUpdate.length > 0) {
    isUpdateOrDeletePermission = true

    const resOfDeletePermission = await prisma.permission.createMany({
      data: permissionToUpdate,
      skipDuplicates: true,
    })

    console.log('Create permission: ', resOfDeletePermission.count)
  }

  if (!isUpdateOrDeletePermission) {
    console.log('No records need updating or deleting.')
  }

  // Lấy lại permissions trong DB sau khi thêm mới hoặc bị xóa
  const updatedPermissionInDb = await prisma.permission.findMany({
    where: {
      deletedAt: null,
    },
  })

  const adminPermissionIds = updatedPermissionInDb.map((item) => ({
    id: item.id,
  }))

  const sellerPermissionIds = updatedPermissionInDb
    .filter((item) => sellerModule.includes(item.module))
    .map((item) => ({
      id: item.id,
    }))

  const clientPermissionIds = updatedPermissionInDb
    .filter((item) => clientModule.includes(item.module))
    .map((item) => ({
      id: item.id,
    }))

  await Promise.all([
    updateRole(adminPermissionIds, RoleName.ADMIN),
    updateRole(sellerPermissionIds, RoleName.SELLER),
    updateRole(clientPermissionIds, RoleName.CLIENT),
  ])

  const clientRole = await prisma.role.findFirstOrThrow({
    where: {
      name: RoleName.CLIENT,
      deletedAt: null,
    },
  })

  await prisma.role.update({
    where: {
      id: clientRole.id,
    },
    data: {
      permissions: {
        set: updatedPermissionInDb.map((item) => ({ id: item.id })),
      },
    },
  })
}

const updateRole = async (permissionIds: { id: number }[], roleName: string) => {
  const role = await prisma.role.findFirstOrThrow({
    where: {
      name: roleName,
      deletedAt: null,
    },
  })

  await prisma.role.update({
    where: {
      id: role.id,
    },
    data: {
      permissions: {
        set: permissionIds,
      },
    },
  })
}

bootstrap()
