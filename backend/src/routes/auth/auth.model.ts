import { z } from 'zod'
import { TypeOfVerificationCode, UserStatus } from '../../shared/constants/auth.constant'

// =============================================================================
// Entity schemas — khớp model Prisma, dùng cho type inference & validate nội bộ
// =============================================================================

/** Bảng User */
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

/** Bảng Role */
export const RoleSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  isActive: z.boolean(),
  createdById: z.number().nullable(),
  updatedById: z.number().nullable(),
  deletedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

/** Bảng Device — phiên đăng nhập theo thiết bị */
export const DeviceSchema = z.object({
  id: z.number(),
  userId: z.number(),
  userAgent: z.string(),
  ip: z.string(),
  lastActive: z.date(),
  createdAt: z.date(),
  isActive: z.boolean(),
})

/** Bảng RefreshToken — lưu refresh token đã cấp */
export const RefreshTokenSchema = z.object({
  token: z.string(),
  userId: z.number(),
  deviceId: z.number(),
  expiresAt: z.date(),
  createdAt: z.date(),
})

/** Bảng VerificationCode — OTP đăng ký / quên mật khẩu / … */
export const VerifyCationCodeSchema = z.object({
  id: z.number(),
  email: z.email(),
  code: z.string(),
  type: z.enum(TypeOfVerificationCode),
  expiresAt: z.date(),
  createdAt: z.date(),
})

// =============================================================================
// Register — POST /auth/register
// =============================================================================

/** Body: thông tin user + OTP + xác nhận mật khẩu */
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

/** Response: user đã tạo (ẩn password, totpSecret) */
export const RegisterResSchema = UserSchema.omit({
  password: true,
  totpSecret: true,
  deletedById: true,
})

// =============================================================================
// Send OTP — POST /auth/otp
// =============================================================================

/** Body: email + loại OTP (REGISTER, FORGOT_PASSWORD, …) */
export const SendOTPSchema = VerifyCationCodeSchema.pick({
  email: true,
  type: true,
}).strict()

// =============================================================================
// Login — POST /auth/login
// =============================================================================

/** Body: email + password */
export const LoginBodySchema = UserSchema.pick({
  email: true,
  password: true,
}).strict()

/** Response: cặp access + refresh token */
export const LoginResSchema = z
  .object({
    accessToken: z.string(),
    refreshToken: z.string(),
  })
  .strict()

// =============================================================================
// Refresh token — POST /auth/refresh (hoặc route tương đương)
// =============================================================================

/** Body: refresh token string từ client */
export const RefreshTokenBodySchema = RefreshTokenSchema.pick({
  token: true,
}).strict()

// =============================================================================
// Google auth — POST /auth/refresh (hoặc route tương đương)
// =============================================================================
export const GoogleAuthStateSchema = DeviceSchema.pick({
  userAgent: true,
  ip: true,
})

export const GetAuthorizationUrlResSchema = z.object({
  url: z.url(),
})

// =============================================================================
// Inferred types — dùng trong service / repository
// =============================================================================

// Entity
export type UserType = z.infer<typeof UserSchema>
export type RoleType = z.infer<typeof RoleSchema>
export type DeviceType = z.infer<typeof DeviceSchema>
export type RefreshTokenType = z.infer<typeof RefreshTokenSchema>
export type VerifyCationCodeType = z.infer<typeof VerifyCationCodeSchema>

// Register
export type RegisterBodyType = z.infer<typeof RegisterBodySchema>
export type RegisterResType = z.infer<typeof RegisterResSchema>

// Send OTP
export type SendOTPBodyType = z.infer<typeof SendOTPSchema>

// Login
export type LoginBodyType = z.infer<typeof LoginBodySchema>

// Refresh token
export type RefreshTokenBodySchemaType = z.infer<typeof RefreshTokenBodySchema>

// Google auth
export type GoogleAuthStateSchemaType = z.infer<typeof GoogleAuthStateSchema>
