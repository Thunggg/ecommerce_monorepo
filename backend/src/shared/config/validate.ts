import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string(),
})

const envParsed = envSchema.safeParse(process.env)

if (!envParsed.success) {
  console.error('❌ Invalid environment variables', envParsed.error.message)
  process.exit(1)
}

export const envConfig = envParsed.data
