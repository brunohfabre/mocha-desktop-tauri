import { Link, Outlet } from 'react-router-dom'

import LogoDarkVector from '@/assets/logo-dark.png'
import LogoLightVector from '@/assets/logo-light.png'
import { useTheme } from '@/components/theme-provider'
export function AuthLayout() {
  const { theme, setTheme } = useTheme()

  function handleChangeTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col antialiased">
      <header className="max-w-7xl w-full mx-auto p-4">
        <button type="button" onClick={handleChangeTheme}>
          <div>
            <img
              src={theme === 'light' ? LogoLightVector : LogoDarkVector}
              alt="Mocha"
              className="w-10"
            />
          </div>
        </button>
      </header>

      <Outlet />

      <footer className="px-4 py-8">
        <p className="text-xs text-center text-zinc-500">
          By signing in, you agree to our{' '}
          <Link
            to="/terms-of-service"
            className="underline text-gray-500 hover:text-gray-700 dark:hover:text-gray-700"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            to="/privacy-policy"
            className="underline text-gray-500 hover:text-gray-700 dark:hover:text-gray-700"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </footer>
    </div>
  )
}
