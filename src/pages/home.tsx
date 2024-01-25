import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsPlaceholder,
  TabsTrigger,
} from '@/components/tabs'
import { useAuthStore } from '@/stores/auth'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

type TabType = { id: string; label: string }

export function Home() {
  const [tabs, setTabs] = useState<TabType[]>([
    {
      id: window.crypto.randomUUID(),
      label: 'Item 1',
    },
    {
      id: window.crypto.randomUUID(),
      label: 'Item 2',
    },
    {
      id: window.crypto.randomUUID(),
      label: 'Item 3',
    },
    {
      id: window.crypto.randomUUID(),
      label: 'Item 4',
    },
  ])
  const [tabSelected, setTabSelected] = useState<TabType | null>(null)

  const user = useAuthStore((state) => state.user)

  useEffect(() => {
    if (!tabSelected && tabs.length) {
      setTabSelected(tabs[0])
    }
  }, [tabSelected, tabs])

  function handleChange(id: string) {
    const findTab = tabs.find((item) => item.id === id)

    if (!findTab) {
      return
    }

    setTabSelected(findTab)
  }

  function handlePreviousTab() {
    const tabSelectedIndex = tabs.findIndex(
      (item) => item.id === tabSelected?.id,
    )

    const previousIndex =
      tabSelectedIndex === 0 ? tabs.length - 1 : tabSelectedIndex - 1

    setTabSelected(tabs[previousIndex])
  }

  function handleNextTab() {
    const tabSelectedIndex = tabs.findIndex(
      (item) => item.id === tabSelected?.id,
    )

    const nextIndex =
      tabSelectedIndex === tabs.length - 1 ? 0 : tabSelectedIndex + 1

    setTabSelected(tabs[nextIndex])
  }

  function handleDeleteTab(id: string) {
    if (id === tabSelected?.id) {
      if (tabs.length) {
        console.log('tem tab')
      } else {
        console.log('nao tem mais tab')
      }
    }

    setTabs((prevState) => prevState.filter((item) => item.id !== id))
  }

  if (!user?.name) {
    return <Navigate to="/create-name" replace />
  }

  if (!tabs.length) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>Mocha</p>
      </div>
    )
  }

  return (
    <Tabs value={tabSelected?.id} onValueChange={handleChange}>
      <TabsList>
        <button
          type="button"
          className="w-10 h-10 border-b flex items-center justify-center opacity-50 hover:opacity-100"
          onClick={handlePreviousTab}
        >
          <CaretLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          className="w-10 h-10 border-b flex items-center justify-center opacity-50 hover:opacity-100"
          onClick={handleNextTab}
        >
          <CaretRight className="w-4 h-4" />
        </button>

        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            onClose={() => handleDeleteTab(tab.id)}
          >
            {tab.label}
          </TabsTrigger>
        ))}

        <TabsPlaceholder />
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id}>
          <p className="p-4">ITEM - {tab.id}</p>
        </TabsContent>
      ))}
    </Tabs>
  )
}
