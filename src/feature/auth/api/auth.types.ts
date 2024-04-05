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
