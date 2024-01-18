import { Navigate } from 'react-router-dom'

import { useAuthStore } from '@/stores/auth'

export function Home() {
  const user = useAuthStore((state) => state.user)

  if (!user?.name) {
    return <Navigate to="/create-name" replace />
  }

  return (
    <div className="flex-1 flex flex-col p-4 gap-4">
      <span>home</span>
      <span>{JSON.stringify(user, null, 2)}</span>
    </div>
  )
}
