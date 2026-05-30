import { Body, Controller, Get, Put } from '@nestjs/common'
import { ProfileService } from './profile.service'
import { ZodSerializerDto } from 'nestjs-zod'
import { ChangePasswordBodyDTO, GetUserProfileResDTO, UpdateMeBodyDTO, UpdateProfileResDTO } from './profile.dto'
import { ActiveUser } from '../../shared/decorators/active-user.decorator'
import { MessageResDTO } from '../../shared/dtos/response.dto'

@Controller('permission')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @ZodSerializerDto(GetUserProfileResDTO)
  getProfile(@ActiveUser('userId') userId: number) {
    return this.profileService.getProfile(userId)
  }

  @Put()
  @ZodSerializerDto(UpdateProfileResDTO)
  updateProfile(@Body() body: UpdateMeBodyDTO, @ActiveUser('userId') userId: number) {
    return this.profileService.updateProfile({
      userId,
      body,
    })
  }

  @Put('change-password')
  @ZodSerializerDto(MessageResDTO)
  changePassword(@Body() body: ChangePasswordBodyDTO, @ActiveUser('userId') userId: number) {
    return this.profileService.changePassword({
      userId,
      body,
    })
  }
}
