import { RouterProvider } from 'react-router-dom'

import './global.css'

import { ThemeProvider } from './components/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="mocha-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
