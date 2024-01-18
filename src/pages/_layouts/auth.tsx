import { Link, Outlet, useNavigate } from 'react-router-dom'

import LogoDarkVector from '@/assets/logo-dark.svg'
import LogoLightVector from '@/assets/logo-light.svg'
import { useTheme } from '@/components/theme-provider'
import { useAuthStore } from '@/stores/auth'

export function AuthLayout() {
  const navigate = useNavigate()

  const token = useAuthStore((state) => state.token)

  const { theme, setTheme } = useTheme()

  if (token) {
    navigate('/', { replace: true })
  }

  function handleChangeTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <header className="max-w-7xl w-full mx-auto p-4">
        <button type="button" onClick={handleChangeTheme}>
          <div>
            <img
              src={theme === 'light' ? LogoLightVector : LogoDarkVector}
              alt="Mocha"
              className="h-7"
            />
          </div>
        </button>
      </header>

      <Outlet />

      <footer className="p-4">
        <p className="text-xs text-center text-zinc-500">
          By signing in, you agree to our{' '}
          <Link
            to="/terms-of-service"
            className="underline text-gray-500 hover:text-gray-700"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            to="/privacy-policy"
            className="underline text-gray-500 hover:text-gray-700"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </footer>
    </div>
  )
}
