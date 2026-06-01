import z from 'zod'
import { UserStatus } from '../constants/auth.constant'
import { HTTPMethod } from '../constants/role.constant'

// =============================================================================
// Shared entity schemas — khớp model Prisma, dùng chung giữa các module
// Tránh circular dependency khi các module import chéo schema của nhau
// =============================================================================

/** Bảng User */
export const UserSchema = z.object({
  id: z.number(),
  email: z.email('Error.EmailInvalid'),
  name: z.string({ error: 'Error.FieldNotEmpty' }).min(1, 'Error.FieldNotEmpty').max(100, 'Error.FieldTooLong'),
  password: z.string({ error: 'Error.FieldNotEmpty' }).min(6, 'Error.PasswordTooShort').max(100, 'Error.FieldTooLong'),
  phoneNumber: z
    .string({ error: 'Error.FieldNotEmpty' })
    .min(9, 'Error.PhoneNumberTooShort')
    .max(15, 'Error.PhoneNumberTooLong'),
  avatar: z.string().nullable(),
  totpSecret: z.string().nullable(),
  status: z.enum(UserStatus, { error: 'Error.InvalidUserStatus' }),
  roleId: z.number({ error: 'Error.FieldNotEmpty' }).positive('Error.InvalidRoleId'),
  createdById: z.number().nullable(),
  updatedById: z.number().nullable(),
  deletedById: z.number().nullable(),
  deletedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

/** Bảng Role */
export const RoleSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  isActive: z.boolean(),
  deletedAt: z.date().nullable(),
  deletedById: z.number().nullable(),
  createdAt: z.date().nullable(),
  createdById: z.number().nullable(),
  updatedAt: z.date().nullable(),
  updatedById: z.number().nullable(),
})

/** Bảng Permission */
export const PermissionSchema = z.object({
  id: z.number(),
  name: z.string().max(500),
  description: z.string(),
  module: z.string().max(500),
  path: z.string().max(1000),
  method: z.enum(HTTPMethod),
  createdById: z.number().nullable(),
  updatedById: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
  deletedById: z.number().nullable(),
  deletedAt: z.date().nullable(),
})

export const RolePermissionSchema = RoleSchema.extend({
  permissions: z.array(PermissionSchema),
})

// =============================================================================
// Inferred types
// =============================================================================

export type UserType = z.infer<typeof UserSchema>
export type RoleType = z.infer<typeof RoleSchema>
export type PermissionType = z.infer<typeof PermissionSchema>
export type RolePermissionType = z.infer<typeof RolePermissionSchema>
