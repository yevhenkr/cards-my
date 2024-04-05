import { Navigate, RouteObject } from 'react-router-dom'

import { SignInPage } from '@/pages/signIn'

export const privateRoutes: RouteObject[] = [{ element: <Navigate to={'/decks'} />, path: '/' }]
export const publicRoutes: RouteObject[] = [{ element: <SignInPage />, path: '/login' }]
