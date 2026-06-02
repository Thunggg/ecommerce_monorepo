import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ZodSerializerDto } from 'nestjs-zod'
import { ActiveRolePermission } from '../../shared/decorators/active-role-permission.decorator'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'
import { MessageResDTO } from '../../shared/dtos/response.dto'
import { GetUserProfileResDTO, UpdateProfileResDTO } from '../profile/profile.dto'
import {
  CreateUserBodyDTO,
  CreateUserResDTO,
  GetUserParamsDTO,
  GetUserResDTO,
  GetUsersQueryDTO,
  UpdateUserBodyDTO,
} from './user.dto'
import { UsersService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ZodSerializerDto(GetUserResDTO)
  list(@Query() query: GetUsersQueryDTO) {
    return this.userService.list({
      page: query.page,
      limit: query.limit,
    })
  }

  @Get(':userId')
  @ZodSerializerDto(GetUserProfileResDTO)
  findById(@Param() params: GetUserParamsDTO) {
    return this.userService.findById(params.userId)
  }

  @Post()
  @ZodSerializerDto(CreateUserResDTO)
  create(
    @Body() body: CreateUserBodyDTO,
    @ActiveUser('userId') userId: number,
    @ActiveRolePermission('name') roleName: string,
  ) {
    return this.userService.create({
      data: body,
      createdByRoleName: roleName,
      createdById: userId,
    })
  }

  @Put(':userId')
  @ZodSerializerDto(UpdateProfileResDTO)
  update(
    @Body() body: UpdateUserBodyDTO,
    @Param() params: GetUserParamsDTO,
    @ActiveUser('userId') userId: number,
    @ActiveRolePermission('name') roleName: string,
  ) {
    return this.userService.update({
      data: body,
      id: params.userId,
      updatedById: userId,
      updatedByRoleName: roleName,
    })
  }

  @Delete(':userId')
  @ZodSerializerDto(MessageResDTO)
  delete(
    @Param() params: GetUserParamsDTO,
    @ActiveUser('userId') userId: number,
    @ActiveRolePermission('name') roleName: string,
  ) {
    return this.userService.delete({
      id: params.userId,
      deletedById: userId,
      deletedByRoleName: roleName,
    })
  }
}
