import { Route, Routes } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { AccountVerification } from '@/pages/account-verification'
import { CreateName } from '@/pages/create-name'
import { Home } from '@/pages/home'
import { PrivacyPolicy } from '@/pages/privacy-policy'
import { SignIn } from '@/pages/sign-in'
import { TermsOfService } from '@/pages/terms-of-service'

import { Protected } from './Protected'

export function Router() {
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
        </Route>

        <Route path="/create-name" element={<CreateName />} />
      </Route>

      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}
