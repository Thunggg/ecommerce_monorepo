import z from 'zod'
import { HTTPMethod } from '../../shared/constants/role.constant'

// 1. PermissionSchema
export const PermissionSchema = z.object({
  id: z.number(),
  name: z.string().max(500),
  description: z.string(),
  path: z.string().max(1000),
  method: z.enum(HTTPMethod),
  createdById: z.number().nullable(),
  updatedById: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedById: z.number(),
  deletedAt: z.date()
})

// 2. GetPermissions response & query
export const GetPermissionsResSchema = z.object({
  data: z.array(PermissionSchema),
  totalItems: z.number(), // Tổng số item
  page: z.number(), // Số trang hiện tại
  limit: z.number(), // Số item trên 1 trang
  totalPages: z.number(), // Tổng số trang
})

export const GetPermissionsQuerySchema = z
  .object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().default(10),
  })
  .strict()

// 3. Permission detail, params, create, update
export const GetPermissionParamsSchema = z
  .object({
    permissionId: z.coerce.number(),
  })
  .strict()

export const GetPermissionDetailResSchema = PermissionSchema

export const CreatePermissionBodySchema = PermissionSchema.pick({
  name: true,
  path: true,
  method: true,
}).strict()

export const UpdatePermissionBodySchema = CreatePermissionBodySchema

// 4. Type exports
export type PermissionType = z.infer<typeof PermissionSchema>
export type GetPermissionsResType = z.infer<typeof GetPermissionsResSchema>
export type GetPermissionsQueryType = z.infer<typeof GetPermissionsQuerySchema>
export type GetPermissionDetailResType = z.infer<typeof GetPermissionDetailResSchema>
export type CreatePermissionBodyType = z.infer<typeof CreatePermissionBodySchema>
export type GetPermissionParamsType = z.infer<typeof GetPermissionParamsSchema>
export type UpdatePermissionBodyType = z.infer<typeof UpdatePermissionBodySchema>
