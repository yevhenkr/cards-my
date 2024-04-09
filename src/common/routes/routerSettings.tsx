import { Navigate, RouteObject } from 'react-router-dom'

import { ForgotPasswordPage } from '@/pages/forgotPassword/ForgotPasswordPage'
import { SignInPage } from '@/pages/signIn'
import { SignUpPage } from '@/pages/signUp/SignUpPage'

export const privateRoutes: RouteObject[] = [{ element: <Navigate to={'/decks'} />, path: '/' }]
export const publicRoutes: RouteObject[] = [
  { element: <SignInPage />, path: '/login' },
  { element: <SignUpPage />, path: '/signUp' },
  { element: <ForgotPasswordPage />, path: '/forgot-password' },
]
