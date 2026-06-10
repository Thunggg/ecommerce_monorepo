import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../../shared/services/prisma.service'
import {
  CategoryTranslationType,
  CreateCategoryTranslationBodyType,
  GetCategoryTranslationDetailResType,
  UpdateCategoryTranslationBodyType,
} from './category-translation.model'

@Injectable()
export class CategoryTranslationRepo {
  constructor(private readonly prismaService: PrismaService) {}

  findById(id: number): Promise<GetCategoryTranslationDetailResType | null> {
    return this.prismaService.categoryTranslation.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    })
  }

  create({
    createdById,
    data,
  }: {
    createdById: number | null
    data: CreateCategoryTranslationBodyType
  }): Promise<CategoryTranslationType> {
    return this.prismaService.categoryTranslation.create({
      data: {
        ...data,
        createdById,
      },
    })
  }

  async update({
    id,
    updatedById,
    data,
  }: {
    id: number
    updatedById: number
    data: UpdateCategoryTranslationBodyType
  }): Promise<CategoryTranslationType> {
    return this.prismaService.categoryTranslation.update({
      where: {
        id,
        deletedAt: null,
      },
      data: {
        ...data,
        updatedById,
      },
    })
  }

  async delete(
    { id, deletedById }: { id: number; deletedById: number },
    isHard?: boolean,
  ): Promise<CategoryTranslationType> {
    return isHard
      ? this.prismaService.categoryTranslation.delete({
          where: { id },
        })
      : this.prismaService.categoryTranslation.update({
          where: { id, deletedAt: null },
          data: {
            deletedAt: new Date(),
            deletedById,
          },
        })
  }
}
