import z from 'zod'
import { PermissionSchema, RoleSchema } from '../../shared/models/entity.model'

export const RoleWithPermissionsSchema = RoleSchema.extend({
  permissions: z.array(PermissionSchema),
})

export const GetRolesResSchema = z.object({
  data: z.array(RoleSchema),
  totalItems: z.number(),
  page: z.number(),
  limit: z.number(),
  totalPages: z.number(),
})

export const GetRolesQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(10),
})

export const GetRoleParamsSchema = z
  .object({
    roleId: z.coerce.number(),
  })
  .strict()

export const GetRoleDetailResSchema = RoleWithPermissionsSchema

export const CreateRoleBodySchema = RoleSchema.pick({
  name: true,
  description: true,
  isActive: true,
}).strict()

export const CreateRoleResSchema = RoleSchema

// Update body: cho phép cập nhật một phần các trường (dựa trên pattern thông thường)
export const UpdateRoleBodySchema = RoleSchema.pick({
  name: true,
  description: true,
  isActive: true,
})
  .extend({
    permissionIds: z.array(z.number()),
  })
  .strict()

export type RoleWithPermissionsType = z.infer<typeof RoleWithPermissionsSchema>
export type GetRolesResType = z.infer<typeof GetRolesResSchema>
export type GetRolesQueryType = z.infer<typeof GetRolesQuerySchema>
export type GetRoleParamsType = z.infer<typeof GetRoleParamsSchema>
export type GetRoleDetailResType = z.infer<typeof GetRoleDetailResSchema>
export type CreateRoleBodyType = z.infer<typeof CreateRoleBodySchema>
export type CreateRoleResType = z.infer<typeof CreateRoleResSchema>
export type UpdateRoleBodyType = z.infer<typeof UpdateRoleBodySchema>
