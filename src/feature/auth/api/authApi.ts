import { baseApi } from '@/common/api/baseApi'
import {
  LoginParams,
  LoginResponse,
  RecoverPassword,
  SignUpParams,
  User,
} from '@/feature/auth/api/auth.types'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginParams>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: 'v1/auth/login',
      }),
    }),
    me: builder.query<User | null, void>({
      providesTags: ['Me'],
      query: () => 'v1/auth/me',
    }),
    recoverPassword: builder.mutation<void, RecoverPassword>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/recover-password',
      }),
    }),
    signUp: builder.mutation<User, SignUpParams>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: 'v1/auth/sign-up',
      }),
    }),
  }),
})

export const { useLoginMutation, useMeQuery, useRecoverPasswordMutation, useSignUpMutation } =
  authApi
