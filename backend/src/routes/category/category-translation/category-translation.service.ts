import { Injectable } from '@nestjs/common'
import {
  isNotFoundPrismaError,
  isUniqueConstraintPrismaError,
  NotFoundRecordException,
} from '../../../shared/helper/error'
import { CategoryTranslationAlreadyExistsException } from './category-translation.error'
import { CreateCategoryTranslationBodyType, UpdateCategoryTranslationBodyType } from './category-translation.model'
import { CategoryTranslationRepo } from './category-translation.repo'

@Injectable()
export class CategoryTranslationService {
  constructor(private categoryTranslationRepo: CategoryTranslationRepo) {}

  async findById(id: number) {
    const categoryTranslation = await this.categoryTranslationRepo.findById(id)
    if (!categoryTranslation) {
      throw NotFoundRecordException
    }
    return categoryTranslation
  }

  create({ data, createdById }: { data: CreateCategoryTranslationBodyType; createdById: number }) {
    try {
      return this.categoryTranslationRepo.create({
        createdById,
        data,
      })
    } catch (error) {
      if (isUniqueConstraintPrismaError(error)) {
        throw CategoryTranslationAlreadyExistsException
      }
      throw error
    }
  }

  async update({
    id,
    data,
    updatedById,
  }: {
    id: number
    data: UpdateCategoryTranslationBodyType
    updatedById: number
  }) {
    try {
      const categoryTranslation = await this.categoryTranslationRepo.update({
        id,
        updatedById,
        data,
      })
      return categoryTranslation
    } catch (error) {
      if (isNotFoundPrismaError(error)) {
        throw NotFoundRecordException
      }
      throw error
    }
  }

  async delete({ id, deletedById }: { id: number; deletedById: number }) {
    try {
      await this.categoryTranslationRepo.delete({
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
