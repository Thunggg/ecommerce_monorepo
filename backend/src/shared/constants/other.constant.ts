import path from 'path'
import { envConfig } from '../config/validate'

export const UPLOAD_DIR = path.resolve(process.cwd(), envConfig.UPLOAD_DIR)

export const ALL_LANGUAGE_CODE = 'all'

export const OrderBy = {
  Asc: 'asc',
  Desc: 'desc',
} as const

export const SortBy = {
  CreatedAt: 'createdAt',
  Sale: 'sale',
  Price: 'price',
} as const

export const PREFIX_PAYMENT_CODE = 'DH'

export type OrderByType = (typeof OrderBy)[keyof typeof OrderBy]
export type SortByType = (typeof SortBy)[keyof typeof SortBy]
