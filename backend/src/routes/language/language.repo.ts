import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../shared/services/prisma.service'
import { CreateLanguageBodyType, LanguageType, UpdateLanguageBodyType } from './language.model'

@Injectable()
export class LanguageRepo {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<LanguageType[]> {
    return this.prisma.language.findMany({
      where: {
        deletedAt: null,
      },
    })
  }

  findById(id: string): Promise<LanguageType | null> {
    return this.prisma.language.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    })
  }

  create({ createdById, data }: { createdById: number; data: CreateLanguageBodyType }) {
    return this.prisma.language.create({
      data: {
        ...data,
        createdById,
      },
    })
  }

  update({
    id,
    updatedById,
    data,
  }: {
    id: string
    updatedById: number
    data: UpdateLanguageBodyType
  }): Promise<LanguageType> {
    return this.prisma.language.update({
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

  async delete(id: string, isHard?: boolean): Promise<LanguageType> {
    if (isHard) {
      return await this.prisma.language.delete({
        where: { id },
      })
    } else {
      return await this.prisma.language.update({
        where: { id, deletedAt: null },
        data: { deletedAt: new Date() },
      })
    }
  }
}
