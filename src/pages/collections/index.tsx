import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { CollectionCard } from './collection-card'

export function Collections() {
  const navigate = useNavigate()

  function handleNavigateToCreateWorkspace() {
    navigate('/create-workspace')
  }

  return (
    <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col p-4 gap-4">
      <header className="flex justify-between">
        <p className="text-lg font-semibold">Collections (5)</p>

        <Button type="button" onClick={handleNavigateToCreateWorkspace}>
          + Collection
        </Button>
      </header>

      <div className="grid grid-cols-3 gap-2">
        {new Array(5).fill('').map((_, index) => (
          <CollectionCard key={String(index)} />
        ))}
      </div>
    </div>
  )
}
