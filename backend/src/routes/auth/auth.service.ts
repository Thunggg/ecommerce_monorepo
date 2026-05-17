import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common'
import { RolesService } from './roles.service'
import { RegisterDto } from './auth.dto'
import { HashingService } from '../../shared/services/hashing.service'
import { PrismaService } from '../../shared/services/prisma.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly rolesService: RolesService,
    private readonly hashingService: HashingService,
    private readonly prisma: PrismaService,
  ) {}

  async register(body: RegisterDto) {
    try {
      // kiểm tra email đã tồn tại chưa
      const existingUser = await this.prisma.user.findFirst({
        where: {
          email: body.email,
        },
      })
      if (existingUser) {
        throw new BadRequestException('Email đã tồn tại')
      }

      const { confirmPassword, code, ...userFields } = body
      // Hash và lấy client role id
      const [clientRoleId, hashedPassword] = await Promise.all([
        await this.rolesService.getClientRoleId(),
        await this.hashingService.hash(body.password),
      ])

      // Tạo user
      const user = await this.prisma.user.create({
        data: {
          email: userFields.email,
          name: userFields.name,
          phoneNumber: userFields.phoneNumber,
          password: hashedPassword,
          roleId: clientRoleId,
        },
        omit: {
          password: true,
          totpSecret: true,
        },
      })

      return user
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException('Failed to register user')
    }
  }
}
