import { twMerge } from 'tailwind-merge'

import { X } from '@phosphor-icons/react'
import * as RadixTabs from '@radix-ui/react-tabs'

export function Tabs(props: RadixTabs.TabsProps) {
  return (
    <RadixTabs.Root className="flex-1 flex flex-col overflow-auto" {...props} />
  )
}

export function TabsList(props: RadixTabs.TabsListProps) {
  return <RadixTabs.List className="flex overflow-auto divide-x" {...props} />
}

interface TabsTriggerProps extends RadixTabs.TabsTriggerProps {
  onClose?: () => void
}

export function TabsTrigger({
  children,
  onClose,
  className,
  ...props
}: TabsTriggerProps) {
  function handleClose() {
    if (onClose) {
      onClose()
    }
  }

  return (
    <RadixTabs.Trigger
      className={twMerge(
        'flex items-center gap-2 border-b pl-4 pr-2 h-10 opacity-50 data-[state=active]:border-b-transparent data-[state=active]:opacity-100 data-[state=inactive]:hover:opacity-75',
        className,
      )}
      {...props}
    >
      {children}

      {onClose && (
        <div
          onClick={handleClose}
          className="w-5 h-5 flex items-center justify-center rounded-md hover:bg-muted"
        >
          <X className="w-3 h-3" />
        </div>
      )}
    </RadixTabs.Trigger>
  )
}

export function TabsContent(props: RadixTabs.TabsContentProps) {
  return <RadixTabs.Content {...props} />
}

export function TabsPlaceholder() {
  return <div className="flex-1 border-b" />
}
