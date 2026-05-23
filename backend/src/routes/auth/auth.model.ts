import { z } from 'zod'
import { TypeOfVerificationCode, UserStatus } from '../../shared/constants/auth.constant'

// =============================================================================
// Entity schemas — khớp model Prisma, dùng cho type inference & validate nội bộ
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
  token: z.string({ error: 'Error.FieldNotEmpty' }).min(1, 'Error.FieldNotEmpty'),
  userId: z.number(),
  deviceId: z.number(),
  expiresAt: z.date(),
  createdAt: z.date(),
})

/** Bảng VerificationCode — OTP đăng ký / quên mật khẩu / … */
export const VerifyCationCodeSchema = z.object({
  id: z.number(),
  email: z.email('Error.EmailInvalid'),
  code: z.string({ error: 'Error.FieldNotEmpty' }).length(6, 'Error.InvalidVerificationCode'),
  type: z.enum(TypeOfVerificationCode, { error: 'Error.InvalidVerificationType' }),
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
    confirmPassword: z
      .string({ error: 'Error.FieldNotEmpty' })
      .min(6, 'Error.PasswordTooShort')
      .max(100, 'Error.FieldTooLong'),
    code: z.string({ error: 'Error.FieldNotEmpty' }).length(6, 'Error.InvalidVerificationCode'),
  })
  .strict()
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Error.PasswordNotMatch',
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
})
  .extend({
    totpCode: z.string().length(6).optional(), // 2FA
    code: z.string().length(6).optional(), // OTP email
  })
  .strict()

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
// Google auth
// =============================================================================

export const GoogleAuthStateSchema = DeviceSchema.pick({
  userAgent: true,
  ip: true,
})

export const GetAuthorizationUrlResSchema = z.object({
  url: z.url('Error.InvalidUrl'),
})

// =============================================================================
// Logout
// =============================================================================
export const LogoutBodySchema = z
  .object({
    refreshToken: z.string(),
  })
  .strict()

// =============================================================================
// Forgot password
// =============================================================================
export const ForgotPasswordBodySchema = z
  .object({
    email: z.email('Error.EmailInvalid'),
    code: z.string().length(6),
    newPassword: z.string().min(6).max(100),
    confirmNewPassword: z.string().min(6).max(100),
  })
  .strict()
  .superRefine(({ newPassword, confirmNewPassword }, ctx) => {
    if (newPassword !== confirmNewPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Error.PasswordNotMatch',
        path: ['confirmPassword'],
      })
    }
  })

// =============================================================================
// Two factor
// =============================================================================
export const DisableTwoFactorBodySchema = z
  .object({
    totpCode: z.string().length(6).optional(),
    code: z.string().length(6).optional(),
  })
  .strict()
  .superRefine(({ code, totpCode }, ctx) => {
    const errorMessage = 'Error.CodeOrTotpInvalid'

    if ((code !== undefined) === (totpCode !== undefined)) {
      ctx.addIssue({
        code: 'custom',
        message: errorMessage,
        path: ['totpCode'],
      })
      ctx.addIssue({
        code: 'custom',
        message: errorMessage,
        path: ['code'],
      })
    }
  })

export const TwoFactorSetupResSchema = z
  .object({
    secret: z.string(),
    uri: z.string(),
  })
  .strict()

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

// Forgot password
export type ForgotPasswordBodySchemaType = z.infer<typeof ForgotPasswordBodySchema>

// Two factor
export type DisableTwoFactorBodySchemaType = z.infer<typeof DisableTwoFactorBodySchema>
export type TwoFactorSetupResType = z.infer<typeof TwoFactorSetupResSchema>
