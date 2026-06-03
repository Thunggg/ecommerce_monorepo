import { Controller, Get, NotFoundException, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'
import 'multer'
import { envConfig } from '../../shared/config/validate'
import { IsPublic } from '../../shared/decorators/auth.decorator'
import path from 'path'
import { UPLOAD_DIR } from '../../shared/constants/other.constant'
import type { Response } from 'express'
import { error } from 'console'

@Controller('media')
export class MediaController {
  constructor() {}

  @Post('image/upload')
  @UseInterceptors(
    FilesInterceptor('files', 100, {
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
    }),
  )
  uploadFile(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
  ) {
    console.log(files)

    return files.map((file) => ({
      url: `${envConfig.PREFIX_STATIC_ENDPOINT}${file.filename}`,
    }))
  }

  @Get('static/:filename')
  @IsPublic()
  serveFile(@Param('filename') filename: string, @Res() res: Response) {
    return res.sendFile(path.resolve(UPLOAD_DIR, filename), (error) => {
      if (error) {
        const notfound = new NotFoundException('File not found!')
        res.status(notfound.getStatus()).json(notfound.getResponse())
      }
    })
  }
}
