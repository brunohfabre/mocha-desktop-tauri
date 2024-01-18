import { Outlet, useNavigate } from 'react-router-dom'

import { useAuthStore } from '@/stores/auth'

export function AppLayout() {
  const navigate = useNavigate()

  const token = useAuthStore((state) => state.token)

  if (!token) {
    navigate('/sign-in', {
      replace: true,
    })
  }

  return (
    <div>
      <span>app layout</span>

      <Outlet />
    </div>
  )
}
