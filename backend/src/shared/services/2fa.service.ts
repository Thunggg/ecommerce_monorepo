import { Injectable } from '@nestjs/common'
import * as OTPAuth from 'otpauth'
import { envConfig } from '../config/validate'

@Injectable()
export class TwoFactorAuthService {
  private createTOTP(email: string, secret?: string): OTPAuth.TOTP {
    return new OTPAuth.TOTP({
      issuer: envConfig.APP_NAME,
      label: email,
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret: secret || new OTPAuth.Secret(),
    })
  }

  generateTOTP(email: string): {
    secret: string
    uri: string
  } {
    const totp = this.createTOTP(email)

    return {
      secret: totp.secret.base32,
      uri: totp.toString(),
    }
  }

  verifyTOTP({ email, token, secret }: { email: string; token: string; secret: string }): boolean {
    const totp = this.createTOTP(email, secret)

    const delta = totp.validate({ token, window: 1 })

    return delta !== null
  }
}
