import { BrowserRouter } from 'react-router-dom'

import './global.css'

import { ThemeProvider } from './components/theme-provider'
import { Router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="mocha-theme">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
