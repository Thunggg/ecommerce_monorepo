import { Injectable } from '@nestjs/common'
import { LanguageRepo } from './language.repo'
import {
  LanguageAlreadyExistsException,
  LanguageNotFoundRecordException,
  LanguageValidationNotEmptyException,
} from './error.model'
import { CreateLanguageBodyType, UpdateLanguageBodyType } from './language.model'
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/client'

@Injectable()
export class LanguageService {
  constructor(private readonly languageRepo: LanguageRepo) {}

  async findAll() {
    const data = await this.languageRepo.findAll()

    return {
      data,
      totalItems: data.length,
    }
  }

  async findById(id: string) {
    const language = this.languageRepo.findById(id)

    if (!language) {
      throw LanguageNotFoundRecordException
    }

    return language
  }

  async create({ data, createdById }: { data: CreateLanguageBodyType; createdById: number }) {
    try {
      return await this.languageRepo.create({
        createdById,
        data,
      })
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw LanguageAlreadyExistsException
      }
      throw error
    }
  }

  async update({ id, data, updatedById }: { id: string; data: UpdateLanguageBodyType; updatedById: number }) {
    try {
      return await this.languageRepo.update({
        id,
        data,
        updatedById,
      })
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw LanguageValidationNotEmptyException
      }

      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw LanguageValidationNotEmptyException
      }

      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw LanguageNotFoundRecordException
      }

      throw error
    }
  }

  async delete(id: string) {
    try {
      await this.languageRepo.delete(id, true)

      return {
        message: 'Delete successfully',
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw LanguageNotFoundRecordException
      }
      throw error
    }
  }
}
