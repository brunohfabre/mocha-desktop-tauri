import { Outlet, useNavigate } from 'react-router-dom'

import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { useTabsStore } from '@/stores/tabs'
import { CaretLeft, CaretRight, X } from '@phosphor-icons/react'

export function AppLayout() {
  const navigate = useNavigate()

  const tabs = useTabsStore((state) => state.tabs)
  const selected = useTabsStore((state) => state.selected)
  const changeSelected = useTabsStore((state) => state.changeSelected)
  const removeTab = useTabsStore((state) => state.removeTab)

  function handleChangeTab(id: string) {
    changeSelected(id)
    navigate('/')
  }

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
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  type="button"
                  variant={tab.id === selected ? 'secondary' : 'ghost'}
                  className={cn(
                    'gap-2 pl-3 pr-1.5',
                    tab.id !== selected && 'opacity-50',
                  )}
                  onClick={() => handleChangeTab(tab.id)}
                >
                  {tab.label}

                  <Button
                    size="icon"
                    className="w-6 h-6"
                    variant="ghost"
                    onClick={(event) => {
                      event.stopPropagation()

                      removeTab(tab.id)
                    }}
                  >
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
