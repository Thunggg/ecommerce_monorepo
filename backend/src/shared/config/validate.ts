import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string(),
  ACCESS_TOKEN_EXPIRES_IN: z.string(),
  REFRESH_TOKEN_EXPIRES_IN: z.string(),
  ACCESS_TOKEN_SECRET: z.string(),
  REFRESH_TOKEN_SECRET: z.string(),
  OTP_EXPIRES_IN: z.string(),
  RESEND_API_KEY: z.string(),
  SECRET_KEY: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_REDIRECT_URI: z.string(),
  GOOGLE_CLIENT_REDIRECT_URI: z.string(),
  APP_NAME: z.string(),
  UPLOAD_DIR: z.string(),
  PREFIX_STATIC_ENDPOINT: z.string(),
})

const envParsed = envSchema.safeParse(process.env)

if (!envParsed.success) {
  console.error('❌ Invalid environment variables', envParsed.error.message)
  process.exit(1)
}

export const envConfig = envParsed.data
