import { BrowserRouter } from 'react-router-dom'

import './global.css'

import { ThemeProvider } from './components/theme-provider'
import { TooltipProvider } from './components/ui/tooltip'
import { Router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="mocha-theme">
      <TooltipProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  )
}
