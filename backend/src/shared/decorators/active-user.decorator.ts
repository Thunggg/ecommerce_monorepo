import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { REQUEST_USER_KEY } from '../constants/auth.constant'
import { AccessTokenPayload } from '../types/jwt.type'

export const ActiveUser = createParamDecorator<keyof AccessTokenPayload | undefined>((field, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()

  const user: AccessTokenPayload | undefined = request[REQUEST_USER_KEY]

  return field ? user?.[field] : user
})
