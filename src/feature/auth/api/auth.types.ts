export type LoginResponse = {
  accessToken: string
}

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean | undefined
}
