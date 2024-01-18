import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { AccountVerification } from './pages/account-verification'
import { CreateName } from './pages/create-name'
import { Home } from './pages/home'
import { SignIn } from './pages/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/create-name',
        element: <CreateName />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/account-verification',
        element: <AccountVerification />,
      },
    ],
  },
])
