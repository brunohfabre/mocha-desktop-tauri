import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/sidebar'

export function AppLayout() {
  return (
    <div className="min-h-screen w-full flex antialiased">
      <Sidebar expanded />

      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
    </div>
  )
}
