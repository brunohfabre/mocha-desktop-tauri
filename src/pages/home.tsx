import { useNavigate } from 'react-router-dom'

import { useAuthStore } from '@/stores/auth'

export function Home() {
  const navigate = useNavigate()

  const user = useAuthStore((state) => state.user)

  if (!user?.name) {
    navigate('/create-name')
  }

  return (
    <div className="flex flex-col p-4 gap-4">
      <span>home</span>
      <span>{JSON.stringify(user, null, 2)}</span>
    </div>
  )
}
