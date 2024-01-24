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
    <RadixTabs.Trigger {...props}>
      {children}

      {onClose && (
        <button
          type="button"
          onClick={handleClose}
          className="w-5 h-5 flex items-center justify-center rounded-md hover:bg-muted"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </RadixTabs.Trigger>
  )
}

export function TabsContent(props: RadixTabs.TabsContentProps) {
  return <RadixTabs.Content {...props} />
}
