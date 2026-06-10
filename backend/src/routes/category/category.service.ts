import { Injectable } from '@nestjs/common'
import { I18nContext } from 'nestjs-i18n'
import { isNotFoundPrismaError, NotFoundRecordException } from '../../shared/helper/error'
import { CreateCategoryBodyDTO, UpdateCategoryBodyDTO } from './category.dto'
import { CategoryRepo } from './category.repo'

@Injectable()
export class CategoryService {
  constructor(private categoryRepo: CategoryRepo) {}

  async findAll(GetAllCategoriesQueryType: { parentCategoryId?: number }) {
    const data = await this.categoryRepo.findAll({
      languageId: I18nContext.current()?.lang as string,
      parentCategoryId: GetAllCategoriesQueryType.parentCategoryId || null,
    })
    return data
  }

  async findById(id: number) {
    const category = await this.categoryRepo.findById({ id, languageId: I18nContext.current()?.lang as string })
    if (!category) {
      throw NotFoundRecordException
    }
    return category
  }

  create({ data, createdById }: { data: CreateCategoryBodyDTO; createdById: number }) {
    return this.categoryRepo.create({
      createdById,
      data,
    })
  }

  async update({ id, data, updatedById }: { id: number; data: UpdateCategoryBodyDTO; updatedById: number }) {
    try {
      const category = await this.categoryRepo.update({
        id,
        updatedById,
        data,
      })
      return category
    } catch (error) {
      if (isNotFoundPrismaError(error)) {
        throw NotFoundRecordException
      }
      throw error
    }
  }

  async delete({ id, deletedById }: { id: number; deletedById: number }) {
    try {
      await this.categoryRepo.delete({
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
