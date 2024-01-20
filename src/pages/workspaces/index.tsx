import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { WorkspaceCard } from './workspace-card'

export function Workspaces() {
  const navigate = useNavigate()

  function handleNavigateToCreateWorkspace() {
    navigate('/create-workspace')
  }

  return (
    <div className="max-w-7xl flex flex-col p-4 gap-4">
      <header className="flex justify-between">
        <p className="text-lg font-semibold">Workspaces (5)</p>

        <Button type="button" onClick={handleNavigateToCreateWorkspace}>
          + Workspace
        </Button>
      </header>

      <div className="grid grid-cols-3 gap-2">
        {new Array(5).fill('').map((_, index) => (
          <WorkspaceCard key={String(index)} />
        ))}
      </div>
    </div>
  )
}
