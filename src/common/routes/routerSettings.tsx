import { Navigate, RouteObject } from 'react-router-dom'

import { DecksPage } from '@/pages/DecksPage/DecksPage'
import { ForgotPasswordPage } from '@/pages/forgotPassword/ForgotPasswordPage'
import { CreateNewPasswordPage } from '@/pages/newPassword/CreateNewPasswordPage'
import { SignInPage } from '@/pages/signIn'
import { SignUpPage } from '@/pages/signUp/SignUpPage'

export const privateRoutes: RouteObject[] = [
  { element: <Navigate to={'/decks'} />, path: '/' },
  { element: <DecksPage />, path: '/decks' },
]
export const publicRoutes: RouteObject[] = [
  { element: <SignInPage />, path: '/login' },
  { element: <SignUpPage />, path: '/signUp' },
  { element: <ForgotPasswordPage />, path: '/forgot-password' },
  { element: <CreateNewPasswordPage />, path: '/create-new-password/:token' },
]
