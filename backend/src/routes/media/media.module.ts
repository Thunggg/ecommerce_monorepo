import { Module } from '@nestjs/common'
import { MediaController } from './media.controller'
import { MulterModule } from '@nestjs/platform-express'
import { generateRandomFilename } from '../../shared/helper/randome-name-file'
import multer from 'multer'
import { existsSync, mkdirSync } from 'fs'
import { UPLOAD_DIR } from '../../shared/constants/other.constant'

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
