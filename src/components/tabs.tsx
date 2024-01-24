import { MouseEvent } from 'react'

import { X } from '@phosphor-icons/react'
import * as RadixTabs from '@radix-ui/react-tabs'

export function Tabs(props: RadixTabs.TabsProps) {
  return (
    <RadixTabs.Root className="flex-1 flex flex-col overflow-auto" {...props} />
  )
}

export function TabsList(props: RadixTabs.TabsListProps) {
  return <RadixTabs.List className="flex overflow-auto" {...props} />
}

interface TabsTriggerProps extends RadixTabs.TabsTriggerProps {
  onClose?: () => void
}

export function TabsTrigger({ children, onClose, ...props }: TabsTriggerProps) {
  function handleClose() {
    if (onClose) {
      onClose()
    }
  }

  return (
    <RadixTabs.Trigger
      className="flex whitespace-nowrap h-10 px-4 items-center gap-3"
      {...props}
    >
      {children}

      {onClose && (
        <button type="button" onClick={handleClose}>
          <X />
        </button>
      )}
    </RadixTabs.Trigger>
  )
}

export function TabsContent(props: RadixTabs.TabsContentProps) {
  return <RadixTabs.Content {...props} />
}
