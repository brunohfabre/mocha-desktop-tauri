import { Outlet } from 'react-router-dom'

import { PageHeader } from '@/components/page-header'

export function InternalLayout() {
  return (
    <div className="min-h-screen w-full flex flex-col antialiased">
      <PageHeader />

      <Outlet />
    </div>
  )
}
