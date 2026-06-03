import {
  BadRequestException,
  ConflictException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common'

// =============================================================================
// Auth errors
// =============================================================================

export const EmailAlreadyExistsException = new UnprocessableEntityException([
  { message: 'Error.EmailAlreadyExists', path: 'email' },
])

export const EmailNotFoundException = new UnprocessableEntityException([
  { message: 'Error.EmailNotFound', path: 'email' },
])

export const InvalidVerificationCodeException = new UnprocessableEntityException([
  { message: 'Error.InvalidVerificationCode', path: 'code' },
])

export const OTPExpiredException = new UnprocessableEntityException([{ message: 'Error.OTPExpired', path: 'code' }])

export const IncorrectPasswordException = new UnprocessableEntityException([
  { message: 'Error.IncorrectPassword', path: 'password' },
])

export const FailedToSendOTPException = new UnprocessableEntityException([
  { message: 'Error.FailedToSendOTP', path: 'email' },
])

export const FieldNotEmptyException = new ConflictException([{ message: 'Error.FieldNotEmpty', path: 'unknown' }])

export const RefreshTokenRevokedException = new UnauthorizedException([
  { message: 'Error.RefreshTokenRevoked', path: 'token' },
])

export const EmailRequiredException = new BadRequestException([{ message: 'Error.EmailRequired', path: 'email' }])

export const UniqueViolationException = new UnprocessableEntityException([
  { message: 'Error.EmailAlreadyExists', path: 'email' },
])

export const TOTPAlreadyEnableException = new UnprocessableEntityException([
  { message: 'Error.TOTPAlreadyEnabled', path: 'totpcode' },
])

export const TOTPNotEnableException = new UnprocessableEntityException([
  { message: 'Error.TOTPNotEnabled', path: 'totpcode' },
])

export const InvalidTOTPException = new UnprocessableEntityException([
  { message: 'Error.InvalidTOTPAndCode', path: 'totpcode' },
])

export const InvalidTOTPAndCodeException = new UnprocessableEntityException([
  { message: 'Error.InvalidTOTPAndCode', path: 'totpcode' },
  { message: 'Error.InvalidOTPAndCode', path: 'code' },
])
