import { Module } from '@nestjs/common'
import { MediaController } from './media.controller'
import path from 'path'
import { MulterModule } from '@nestjs/platform-express'
import { generateRandomFilename } from '../../shared/helper/randome-name-file'
import multer from 'multer'
import { envConfig } from '../../shared/config/validate'
import { existsSync, mkdirSync } from 'fs'

const UPLOAD_DIR = path.resolve(process.cwd(), envConfig.UPLOAD_DIR)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIR)
  },
  filename: function (req, file, cb) {
    const newFileName = generateRandomFilename(file.originalname)
    cb(null, newFileName)
  },
})

@Module({
  controllers: [MediaController],
  providers: [],
  imports: [
    MulterModule.register({
      storage,
    }),
  ],
})
export class UploadModule {
  constructor() {
    if (!existsSync(UPLOAD_DIR)) {
      mkdirSync(UPLOAD_DIR, { recursive: true })
    }
  }
}
