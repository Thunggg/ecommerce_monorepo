import { BadRequestException, Injectable } from '@nestjs/common'
import { RoleName } from '../../shared/constants/role.constant'
import {
  CreateRoleBodyType,
  GetRolesQueryType,
  GetRolesResType,
  RoleWithPermissionsType,
  UpdateRoleBodyType,
} from './role.model'
import { RoleRepo } from './role.repo'
import {
  NotFoundRoleException,
  ProhibitedActionOnBaseRoleException,
  RoleAlreadyExistException,
  RoleNotFoundException,
  RoleValidationNotEmptyException,
} from './role.error'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client'
import { RoleType } from '../../shared/models/entity.model'

@Injectable()
export class RolesService {
  constructor(private readonly roleRepo: RoleRepo) {}

  private async verifyRole(roleId: number) {
    const role = await this.roleRepo.findById(roleId)

    if (!role) {
      throw NotFoundRoleException
    }

    const baseRoles: string[] = [RoleName.ADMIN, RoleName.CLIENT, RoleName.SELLER]

    if (baseRoles.includes(role.name)) {
      throw ProhibitedActionOnBaseRoleException
    }

    return role
  }

  async list(pagination: GetRolesQueryType): Promise<GetRolesResType> {
    const data = await this.roleRepo.list(pagination)

    return data
  }

  async findById(id: number): Promise<RoleWithPermissionsType | null> {
    const role = await this.roleRepo.findById(id)

    if (!role) {
      throw RoleNotFoundException
    }

    return role
  }

  async create({ createdById, data }: { createdById: number; data: CreateRoleBodyType }): Promise<RoleType> {
    try {
      return this.roleRepo.create({
        data,
        createdById,
      })
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw RoleAlreadyExistException
      }
      throw error
    }
  }

  async update({ id, data, updatedById }: { id: number; data: UpdateRoleBodyType; updatedById: number }) {
    try {
      await this.verifyRole(id)

      const updatedRole = await this.roleRepo.update({
        id,
        updatedById,
        data,
      })

      return updatedRole
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw RoleValidationNotEmptyException
      }

      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw RoleAlreadyExistException
      }

      throw error
    }
  }

  async delete({ id, deletedById }: { id: number; deletedById: number }) {
    try {
      await this.verifyRole(id)

      await this.roleRepo.delete({
        id,
        deletedById,
      })

      return {
        message: 'Delete successfully!',
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2005') {
        throw NotFoundRoleException
      }
      throw error
    }
  }
}
