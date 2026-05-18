import { Injectable } from '@nestjs/common'
import * as React from 'react'
import { Resend } from 'resend'
import { envConfig } from '../config/validate'
import AWSVerifyEmail from '../../emails/aws-verify-email'

@Injectable()
export class EmailService {
  private resend: Resend

  constructor() {
    this.resend = new Resend(envConfig.RESEND_API_KEY)
  }

  async sendOTP(payload: { email: string; code: string }) {
    return await this.resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [`${payload.email}`],
      subject: 'Verify email',
      react: React.createElement(AWSVerifyEmail, { verificationCode: payload.code }),
    })
  }
}
