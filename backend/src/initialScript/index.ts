import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'
import { RoleName } from '../shared/constants/role.constant'
import { HashingService } from '../shared/services/hashing.service'
import { config } from 'dotenv'
import path from 'path'

// load env file trong backend
config({ path: path.resolve(process.cwd(), '.env') })

// Kiểm tra xem database url đã được khởi tạo hay chưa
if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set')
  process.exit(1)
}

// Khởi tạo Prisma service
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) })
const hashingService = new HashingService()

const main = async () => {
  // khởi tạo bảng role
  const newRoles = await prisma.role.createMany({
    data: [{ name: RoleName.ADMIN }, { name: RoleName.CLIENT }, { name: RoleName.SELLER }],
  })

  // Kiểm tra xem tài khoản admin đã được khởi tạo hay chưa
  const adminAccount = await prisma.user.findFirst({
    where: {
      email: 'admin@gmail.com',
    },
  })

  let newAdminAccount = null

  const adminRole = await prisma.role.findFirstOrThrow({
    where: {
      name: RoleName.ADMIN,
    },
  })

  if (!adminAccount) {
    newAdminAccount = await prisma.user.create({
      data: {
        email: 'admin@gmail.com',
        name: 'Admin',
        password: await hashingService.hash('123456'),
        phoneNumber: '0909090909',
        roleId: adminRole.id,
      },
    })
  }

  return { newAdminAccount, roleCount: newRoles.count }
}

main()
  .then((value) => {
    console.log('Khởi tạo dữ liệu thành công')
    console.log('Tài khoản admin: ', value?.newAdminAccount)
    console.log('Số lượng role: ', value?.roleCount)
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
