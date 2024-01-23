import { useNavigate } from 'react-router-dom'

import { CaretRight } from '@phosphor-icons/react'

export function WorkspaceCard({ index }: { index: number }) {
  const navigate = useNavigate()

  function handleSelectWorkspace() {
    navigate('/')
  }

  return (
    <button
      className="flex border rounded-lg p-4 transition-colors hover:bg-muted"
      onClick={handleSelectWorkspace}
    >
      <span className="flex-1 text-sm text-start">Workspace #{index + 1}</span>

      <CaretRight className="w-4 h-4 text-zinc-500" weight="bold" />
    </button>
  )
}
