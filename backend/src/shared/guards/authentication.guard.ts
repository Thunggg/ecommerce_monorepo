import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, HttpException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AUTH_TYPE_KEY, AuthMetadata } from '../decorators/auth.decorator'
import { AuthType, AuthTypeType, ConditionGuard } from '../constants/auth.constant'
import { AccessTokenGuard } from './access-token.guard'
import { APIKeyGuard } from './api-key.guard'

const DEFAULT_AUTH_METADATA: AuthMetadata = {
  authTypes: [AuthType.Bearer],
  options: {
    condition: ConditionGuard.And,
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
    const metadata = this.getAuthTypeValue(context)

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

    return options.condition === ConditionGuard.And
      ? this.handleAndCondition(guards, context)
      : this.handleOrCondition(guards, context)
  }

  private getAuthTypeValue(context: ExecutionContext): AuthMetadata {
    return (
      this.reflector.getAllAndOverride<AuthMetadata>(AUTH_TYPE_KEY, [context.getHandler(), context.getClass()]) ??
      DEFAULT_AUTH_METADATA
    )
  }

  private async handleOrCondition(guards: CanActivate[], context: ExecutionContext): Promise<boolean> {
    let lastError: any = null

    // Duyệt qua các guard, nếu 1 guard pass thì return true
    for (const guard of guards) {
      try {
        if (await guard.canActivate(context)) {
          return true
        }
      } catch (error) {
        lastError = error
      }
    }

    if (lastError instanceof HttpException) {
      throw lastError
    }

    throw new UnauthorizedException()
  }

  private async handleAndCondition(guards: CanActivate[], context: ExecutionContext): Promise<boolean> {
    // Duyệt qua các guard, nếu 1 guard not pass thì return false

    for (const guard of guards) {
      try {
        if (!(await guard.canActivate(context))) {
          throw new UnauthorizedException()
        }
      } catch (error) {
        if (error instanceof HttpException) {
          throw error
        }
        throw new UnauthorizedException()
      }
    }
    return true
  }
}
