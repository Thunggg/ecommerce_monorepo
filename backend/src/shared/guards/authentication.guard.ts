import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AUTH_TYPE_KEY, AuthMetadata } from '../decorators/auth.decorator'
import { AuthType, AuthTypeType, ConditionGuard } from '../constants/auth.constant'
import { AccessTokenGuard } from './access-token.guard'
import { APIKeyGuard } from './api-key.guard'

const DEFAULT_AUTH_METADATA: AuthMetadata = {
  authTypes: [AuthType.Bearer],
  options: {
    condition: ConditionGuard.Or,
  },
}

@Injectable()
export class AuthenticationGuard implements CanActivate {
  private readonly guardMap: Record<AuthTypeType, CanActivate | null>

  constructor(
    private readonly reflector: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard,
    private readonly apiKeyGuard: APIKeyGuard,
  ) {
    this.guardMap = {
      [AuthType.APIKey]: this.apiKeyGuard,
      [AuthType.Bearer]: this.accessTokenGuard,
      [AuthType.None]: null,
    }
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const metadata =
      this.reflector.getAllAndOverride<AuthMetadata>(AUTH_TYPE_KEY, [context.getHandler(), context.getClass()]) ??
      DEFAULT_AUTH_METADATA

    const { authTypes, options } = metadata

    if (authTypes.includes(AuthType.None)) {
      return true
    }

    const guards = authTypes
      .filter((type) => type !== AuthType.None)
      .map((type) => this.guardMap[type])
      .filter((g) => g !== null)

    if (guards.length === 0) {
      throw new UnauthorizedException()
    }

    let error = new UnauthorizedException()
    if (options.condition === ConditionGuard.Or) {
      for (const guard of guards) {
        const canActivate = await Promise.resolve(guard.canActivate(context)).catch((err) => {
          error = err
          return false
        })

        if (canActivate) {
          return true
        }
      }

      throw error
    } else {
      for (const guard of guards) {
        const canActive = await Promise.resolve(guard.canActivate(context)).catch((err) => {
          error = err
          return false
        })

        if (!canActive) {
          throw error
        }
      }
    }
    return true
  }
}
