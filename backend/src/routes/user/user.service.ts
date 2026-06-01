import { ForbiddenException, Injectable } from '@nestjs/common'
import { UserRepo } from './user.repo'
import { CreateUserBodyType, GetUsersQueryType, UpdateUserBodyType } from './user.model'
import { SharedUserRepository } from '../../shared/repositories/shared-user.repo'
import { RoleName } from '../../shared/constants/role.constant'
import { SharedRoleRepository } from '../../shared/repositories/shared-role.repo'
import {
  isForeignKeyConstraintPrismaError,
  isNotFoundPrismaError,
  isUniqueConstraintPrismaError,
  NotFoundRecordException,
} from '../../shared/helper/error'
import { HashingService } from '../../shared/services/hashing.service'
import { CannotUpdateOrDeleteYourselfException, RoleNotFoundException, UserAlreadyExistsException } from './user.error'

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepo: UserRepo,
    private readonly sharedUserRepository: SharedUserRepository,
    private readonly sharedRoleRepository: SharedRoleRepository,
    private readonly hashingService: HashingService,
  ) {}

  /**
   * Function này kiểm tra xem người thực hiện có quyền tác động đến người khác không.
   * Vì chỉ có người thực hiện là admin role mới có quyền sau: Tạo admin user, update roleId thành admin, xóa admin user.
   * Còn nếu không phải admin thì không được phép tác động đến admin
   */
  private async verifyRole({ roleNameAgent, roleIdTarget }: { roleNameAgent: string; roleIdTarget: number }) {
    // Agent là admin thì cho phép
    if (roleNameAgent === RoleName.ADMIN) {
      return true
    } else {
      // Agent không phải admin thì roleIdTarget phải khác admin
      const adminRoleId = await this.sharedRoleRepository.getAdminRoleId()
      if (roleIdTarget === adminRoleId) {
        throw new ForbiddenException()
      }
    }
    return true
  }

  // 1. List users
  list(pagination: GetUsersQueryType) {
    return this.userRepo.list(pagination)
  }

  // 2. Find by id
  async findById(id: number) {
    const user = await this.sharedUserRepository.findUniqueIncludeRolePermissions({
      id,
      deletedAt: null,
    })
    if (!user) {
      throw NotFoundRecordException
    }
    return user
  }

  // 4. Create user
  async create({
    data,
    createdById,
    createdByRoleName,
  }: {
    data: CreateUserBodyType
    createdById: number
    createdByRoleName: string
  }) {
    try {
      // Chỉ có admin agent mới có quyền tạo user với role là admin
      await this.verifyRole({
        roleNameAgent: createdByRoleName,
        roleIdTarget: data.roleId,
      })

      // Hash the password
      const hashedPassword = await this.hashingService.hash(data.password)

      const user = await this.userRepo.create({
        createdById,
        data: {
          ...data,
          password: hashedPassword,
        },
      })

      return user
    } catch (error) {
      if (isForeignKeyConstraintPrismaError(error)) {
        throw RoleNotFoundException
      }
      if (isUniqueConstraintPrismaError(error)) {
        throw UserAlreadyExistsException
      }
      throw error
    }
  }

  // 5. Update user
  async update({
    id,
    data,
    updatedById,
    updatedByRoleName,
  }: {
    id: number
    data: UpdateUserBodyType
    updatedById: number
    updatedByRoleName: string
  }) {
    try {
      // Khong the cap nhat chinh minh
      if (id === updatedById) {
        throw CannotUpdateOrDeleteYourselfException
      }

      const currentUser = await this.sharedUserRepository.findUnique({
        id,
        deletedAt: null,
      })
      if (!currentUser) {
        throw NotFoundRecordException
      }

      // Lấy roleId ban đầu của người được update để kiểm tra xem liệu người update có quyền update không
      // Không dùng data.roleId vì dữ liệu này có thể bị cố tình truyền sai
      const roleIdTarget = currentUser.roleId
      await this.verifyRole({
        roleNameAgent: updatedByRoleName,
        roleIdTarget,
      })

      const updatedUser = await this.sharedUserRepository.update(
        { id, deletedAt: null },
        {
          ...data,
          updatedById,
        },
      )

      return updatedUser
    } catch (error) {
      if (isNotFoundPrismaError(error)) {
        throw NotFoundRecordException
      }
      if (isUniqueConstraintPrismaError(error)) {
        throw UserAlreadyExistsException
      }
      if (isForeignKeyConstraintPrismaError(error)) {
        throw RoleNotFoundException
      }
      throw error
    }
  }

  // 6. Delete user
  async delete({ id, deletedById, deletedByRoleName }: { id: number; deletedById: number; deletedByRoleName: string }) {
    try {
      // Ko the xoa chinh minh
      if (id === deletedById) {
        throw CannotUpdateOrDeleteYourselfException
      }

      const currentUser = await this.sharedUserRepository.findUnique({
        id,
        deletedAt: null,
      })

      if (!currentUser) {
        throw NotFoundRecordException
      }

      const roleIdTarget = currentUser.roleId

      await this.verifyRole({
        roleNameAgent: deletedByRoleName,
        roleIdTarget,
      })

      await this.userRepo.delete({
        id,
        deletedById,
      })

      return {
        message: 'Delete successfully',
      }
    } catch (error) {
      if (isNotFoundPrismaError(error)) {
        throw NotFoundRecordException
      }
      throw error
    }
  }
}
