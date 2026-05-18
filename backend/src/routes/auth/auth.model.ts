import { z } from 'zod'
import { TypeOfVerificationCode, UserStatus } from '../../shared/constants/auth.constant'

export const UserSchema = z.object({
  id: z.number(),
  email: z.email(),
  name: z.string().min(1).max(100),
  password: z.string().min(6).max(100),
  phoneNumber: z.string().min(9).max(15),
  avatar: z.string().nullable(),
  totpSecret: z.string().nullable(),
  status: z.enum(UserStatus),
  roleId: z.number().positive(),
  createdById: z.number().nullable(),
  updatedById: z.number().nullable(),
  deletedById: z.number().nullable(),
  deletedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const RegisterBodySchema = UserSchema.pick({
  email: true,
  password: true,
  name: true,
  phoneNumber: true,
})
  .extend({
    confirmPassword: z.string().min(6).max(100),
    code: z.string().length(6),
  })
  .strict()
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password and confirm password must match',
        path: ['confirmPassword'],
      })
    }
  })

export const RegisterResSchema = UserSchema.omit({
  password: true,
  totpSecret: true,
  deletedById: true,
})

export const VerifyCationCodeSchema = z.object({
  id: z.number(),
  email: z.email(),
  code: z.string(),
  type: z.enum(TypeOfVerificationCode),
  expiresAt: z.date(),
  createdAt: z.date(),
})

export const SendOTPSchema = VerifyCationCodeSchema.pick({
  email: true,
  type: true,
}).strict()

export type UserType = z.infer<typeof UserSchema>

export type RegisterBodyType = z.infer<typeof RegisterBodySchema>
export type RegisterResType = z.infer<typeof RegisterResSchema>

export type VerifyCationCodeType = z.infer<typeof VerifyCationCodeSchema>
