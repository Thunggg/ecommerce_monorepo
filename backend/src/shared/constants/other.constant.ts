import path from 'path'
import { envConfig } from '../config/validate'

export const UPLOAD_DIR = path.resolve(process.cwd(), envConfig.UPLOAD_DIR)
