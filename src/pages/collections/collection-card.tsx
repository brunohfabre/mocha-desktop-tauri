import { useNavigate } from 'react-router-dom'

import { CaretRight } from '@phosphor-icons/react'

export function CollectionCard() {
  const navigate = useNavigate()

  function handleSelectWorkspace() {
    navigate(`/collections/${window.crypto.randomUUID()}`)
  }

  return (
    <button
      className="flex border rounded-lg p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
      onClick={handleSelectWorkspace}
    >
      <span className="flex-1 text-sm text-start">Collection</span>

      <CaretRight className="w-4 h-4 text-zinc-500" weight="bold" />
    </button>
  )
}
