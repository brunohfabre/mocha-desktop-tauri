import { useNavigate } from 'react-router-dom'

import { CaretRight } from '@phosphor-icons/react'

export function WorkspaceCard() {
  const navigate = useNavigate()

  function handleSelectWorkspace() {
    navigate('/')
  }

  return (
    <button className="flex border rounded-lg p-2">
      <span className="flex-1 p-2 text-sm text-start">Workspace #1</span>

      <CaretRight
        className="w-4 h-4"
        weight="bold"
        onClick={handleSelectWorkspace}
      />
    </button>
  )
}
