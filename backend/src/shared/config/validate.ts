import fs from 'fs'
import path from 'path'
import { z } from 'zod'

// kiểm tra file env có tồn tại hay ko
if (!fs.existsSync(path.join(process.cwd() + '/backend', '.env'))) {
  console.error('File .env not found')
  process.exit(0)
}

const envSchema = z.object({
  DATABASE_URL: z.string(),
})

const envParsed = envSchema.safeParse(process.env)

if (!envParsed.success) {
  console.error('❌ Invalid environment variables', envParsed.error.message)
  process.exit(0)
}

export const envConfig = envParsed.data
