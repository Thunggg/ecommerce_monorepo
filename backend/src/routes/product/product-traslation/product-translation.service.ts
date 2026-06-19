import { Injectable } from '@nestjs/common'
import {
  isNotFoundPrismaError,
  isUniqueConstraintPrismaError,
  NotFoundRecordException,
} from '../../../shared/helper/error'
import { LanguageNotFoundRecordException } from '../../language/error.model'
import { ProductTranslationAlreadyExistsException } from './product-translation.error'
import { CreateProductTranslationBodyType, UpdateProductTranslationBodyType } from './product-translation.model'
import { ProductTranslationRepo } from './product-translation.repo'

@Injectable()
export class ProductTranslationService {
  constructor(private productTranslationRepo: ProductTranslationRepo) {}

  // Lấy bản dịch theo ID
  async findById(id: number) {
    const product = await this.productTranslationRepo.findById(id)
    if (!product) {
      throw LanguageNotFoundRecordException
    }
    return product
  }

  // Tạo mới bản dịch
  async create({ data, createdById }: { data: CreateProductTranslationBodyType; createdById: number }) {
    try {
      return await this.productTranslationRepo.create({
        createdById,
        data,
      })
    } catch (error) {
      if (isUniqueConstraintPrismaError(error)) {
        throw ProductTranslationAlreadyExistsException
      }
      throw error
    }
  }

  // Cập nhật bản dịch
  async update({ id, data, updatedById }: { id: number; data: UpdateProductTranslationBodyType; updatedById: number }) {
    try {
      const product = await this.productTranslationRepo.update({
        id,
        updatedById,
        data,
      })
      return product
    } catch (error) {
      if (isUniqueConstraintPrismaError(error)) {
        throw ProductTranslationAlreadyExistsException
      }
      if (isNotFoundPrismaError(error)) {
        throw NotFoundRecordException
      }
      throw error
    }
  }

  // Xóa bản dịch (mềm hoặc cứng, mặc định mềm)
  async delete({ id, deletedById }: { id: number; deletedById: number }) {
    try {
      await this.productTranslationRepo.delete({
        id,
        deletedById,
        // isHard: false, // mặc định xóa mềm
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
