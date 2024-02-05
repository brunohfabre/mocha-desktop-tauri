import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { useTabsStore } from '@/stores/tabs'
import { CaretRight } from '@phosphor-icons/react'

export function CollectionCard() {
  const navigate = useNavigate()

  const [, setSeachParams] = useSearchParams()

  const addTab = useTabsStore((state) => state.addTab)

  const [deleteVisible, setDeleteVisible] = useState(false)

  function handleSelectWorkspace() {
    addTab({
      id: crypto.randomUUID(),
      label: 'Collection',
      content: 'collections',
      reference: crypto.randomUUID(),
    })

    navigate('/')
  }

  function handleOpenEditModal() {
    setSeachParams((state) => {
      state.set('modal', 'true')

      return state
    })
  }

  function handleDelete() {
    console.log('handle delete')
  }

  return (
    <>
      <AlertDialog open={deleteVisible} onOpenChange={setDeleteVisible}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete collection</AlertDialogTitle>
            <AlertDialogDescription>
              Really want to delete this collection?
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Yes, Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <ContextMenu>
        <ContextMenuTrigger asChild>
          <button
            className="flex border rounded-lg p-4 transition-colors hover:bg-muted"
            onClick={handleSelectWorkspace}
          >
            <span className="flex-1 text-sm text-start">Collection</span>

            <CaretRight className="w-4 h-4 text-zinc-500" weight="bold" />
          </button>
        </ContextMenuTrigger>

        <ContextMenuContent>
          <ContextMenuItem onClick={handleSelectWorkspace}>
            View
          </ContextMenuItem>
          <ContextMenuItem onClick={handleOpenEditModal}>Edit</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem
            className="text-red-500"
            onClick={() => setDeleteVisible(true)}
          >
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </>
  )
}
