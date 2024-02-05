import { Navigate } from 'react-router-dom'

import { useAuthStore } from '@/stores/auth'
import { useTabsStore } from '@/stores/tabs'

export function Home() {
  const user = useAuthStore((state) => state.user)

  const tabs = useTabsStore((state) => state.tabs)
  const selected = useTabsStore((state) => state.selected)

  const findTab = tabs.find((tab) => tab.id === selected)

  if (!user?.name) {
    return <Navigate to="/create-name" replace />
  }

  if (selected) {
    return <pre className="text-sm p-4">{JSON.stringify(findTab, null, 2)}</pre>
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <p>Mocha</p>
    </div>
  )
}
