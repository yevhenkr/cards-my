export type LoginResponse = {
  accessToken: string
}

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean | undefined
}
export type User = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type SignUpParams = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type RecoverPassword = {
  email: string
  html?: string
  subject?: string
}

export type ResetPasswordParams = {
  password: string
  token: string
}
