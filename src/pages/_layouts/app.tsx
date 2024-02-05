import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useTabsStore } from '@/stores/tabs'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export function AppLayout() {
  const tabs = useTabsStore((state) => state.tabs)

  return (
    <div className="min-h-screen w-full flex antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="flex items-center border-b h-14 pl-2">
          <div className="mr-2">
            <Button type="button" size="icon" variant="ghost" className="w-6">
              <CaretLeft />
            </Button>

            <Button type="button" size="icon" variant="ghost" className="w-6">
              <CaretRight />
            </Button>
          </div>

          <ScrollArea className="flex-1 w-[64px]">
            <div className="h-14 flex items-center pr-2">
              {tabs.map((tab, index) => (
                <Button
                  key={tab}
                  type="button"
                  variant={index === selected ? 'secondary' : 'ghost'}
                  className={cn(
                    'gap-2 pl-3 pr-1.5',
                    index !== selected && 'opacity-50',
                  )}
                  onClick={() => setSelected(index)}
                >
                  {tab} #{index + 1}
                  <Button size="icon" className="w-6 h-6" variant="ghost">
                    <X className="w-3 h-3" weight="bold" />
                  </Button>
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <Outlet />
      </div>
    </div>
  )
}
