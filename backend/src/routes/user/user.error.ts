import { ForbiddenException, UnprocessableEntityException } from '@nestjs/common'

// User ko tồn tại
export const UserAlreadyExistsException = new UnprocessableEntityException([
  {
    message: 'Error.UserAlreadyExists',
    path: 'email',
  },
])

// Không thể update admin
export const CannotUpdateAdminUserException = new ForbiddenException('Error.CannotUpdateAdminUser')

// Không thể delete admin
export const CannotDeleteAdminUserException = new ForbiddenException('Error.CannotDeleteAdminUser')

// Chi Admin mới có thể đặt role là ADMIN
export const CannotSetAdminRoleToUserException = new ForbiddenException('Error.CannotSetAdminRoleToUser')

// Không thể tìm thấy role hợp lệ
export const RoleNotFoundException = new UnprocessableEntityException({
  message: 'Error.RoleNotFound',
  path: 'roleId',
})

// Không thể xóa hoặc cập nhật chính bản thân mình
export const CannotUpdateOrDeleteYourselfException = new ForbiddenException('Error.CannotUpdateOrDeleteYourself')
