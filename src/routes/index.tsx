import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import LogoDarkImage from '@/assets/logo-dark.png'
import LogoLightImage from '@/assets/logo-light.png'
import { useTheme } from '@/components/theme-provider'
import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { InternalLayout } from '@/pages/_layouts/internal'
import { AccountVerification } from '@/pages/account-verification'
import { Collections } from '@/pages/collections'
import { Collection } from '@/pages/collections/collection'
import { CreateName } from '@/pages/create-name'
import { Home } from '@/pages/home'
import { Notes } from '@/pages/notes'
import { PrivacyPolicy } from '@/pages/privacy-policy'
import { Profile } from '@/pages/profile'
import { SignIn } from '@/pages/sign-in'
import { Tab } from '@/pages/tab'
import { TermsOfService } from '@/pages/terms-of-service'
import { Workspaces } from '@/pages/workspaces'
import { CreateWorkspace } from '@/pages/workspaces/create-workspace'
import { Workspace } from '@/pages/workspaces/workspace'

import { Protected } from './protected'

export function Router() {
  const { theme, setTheme } = useTheme()

  const [loading, setLoading] = useState(true)

  function handleChangeTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, Math.round(Math.random() * 1000))
  }, [])

  if (loading) {
    return (
      <div
        className="min-h-screen w-full flex items-center justify-center"
        onClick={handleChangeTheme}
      >
        <img
          src={theme === 'light' ? LogoLightImage : LogoDarkImage}
          alt="Mocha"
          className="w-24 animate-bounce"
        />
      </div>
    )
  }

  return (
    <Routes>
      <Route element={<Protected isProtected={false} />}>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            path="/account-verification"
            element={<AccountVerification />}
          />
        </Route>
      </Route>

      <Route element={<Protected isProtected />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/notes" element={<Notes />} />

          <Route path="/collections/:id" element={<Collection />} />

          <Route path="/tabs/:id" element={<Tab />} />
        </Route>

        <Route element={<InternalLayout />}>
          <Route path="/create-name" element={<CreateName />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/workspaces" element={<Workspaces />} />
          <Route path="/workspaces/:id" element={<Workspace />} />
          <Route path="/create-workspace" element={<CreateWorkspace />} />
        </Route>
      </Route>

      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}
