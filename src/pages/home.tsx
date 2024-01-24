import { Navigate } from 'react-router-dom'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs'
import { useAuthStore } from '@/stores/auth'

export function Home() {
  const user = useAuthStore((state) => state.user)

  if (!user?.name) {
    return <Navigate to="/create-name" replace />
  }

  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="item-1" onClose={() => console.log('on-close 1')}>
          item 1
        </TabsTrigger>
        <TabsTrigger value="item-2" onClose={() => console.log('on-close 2')}>
          item 2
        </TabsTrigger>
        <TabsTrigger value="item-3" onClose={() => console.log('on-close 3')}>
          item 3
        </TabsTrigger>
        <TabsTrigger value="item-4" onClose={() => console.log('on-close 4')}>
          item 4
        </TabsTrigger>
        <TabsTrigger value="item-5" onClose={() => console.log('on-close 5')}>
          item 5
        </TabsTrigger>
        <TabsTrigger value="item-6" onClose={() => console.log('on-close 6')}>
          item 6
        </TabsTrigger>
        <TabsTrigger value="item-7" onClose={() => console.log('on-close 7')}>
          item 7
        </TabsTrigger>
      </TabsList>

      <TabsContent value="item-1">
        <p>
          ITEM 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus asperiores, fugit ipsam porro a esse, mollitia debitis alias
          aperiam dolorum soluta nesciunt eveniet cum ullam sed pariatur!
          Facere, numquam quas?
        </p>
      </TabsContent>
      <TabsContent value="item-2">
        <p>
          ITEM 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus asperiores, fugit ipsam porro a esse, mollitia debitis alias
          aperiam dolorum soluta nesciunt eveniet cum ullam sed pariatur!
          Facere, numquam quas?
        </p>
      </TabsContent>
      <TabsContent value="item-3">
        <p>
          ITEM 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus asperiores, fugit ipsam porro a esse, mollitia debitis alias
          aperiam dolorum soluta nesciunt eveniet cum ullam sed pariatur!
          Facere, numquam quas?
        </p>
      </TabsContent>
      <TabsContent value="item-4">
        <p>
          ITEM 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus asperiores, fugit ipsam porro a esse, mollitia debitis alias
          aperiam dolorum soluta nesciunt eveniet cum ullam sed pariatur!
          Facere, numquam quas?
        </p>
      </TabsContent>
      <TabsContent value="item-5">
        <p>
          ITEM 5 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus asperiores, fugit ipsam porro a esse, mollitia debitis alias
          aperiam dolorum soluta nesciunt eveniet cum ullam sed pariatur!
          Facere, numquam quas?
        </p>
      </TabsContent>
      <TabsContent value="item-6">
        <p>
          ITEM 6 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus asperiores, fugit ipsam porro a esse, mollitia debitis alias
          aperiam dolorum soluta nesciunt eveniet cum ullam sed pariatur!
          Facere, numquam quas?
        </p>
      </TabsContent>
      <TabsContent value="item-7">
        <p>
          ITEM 7 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus asperiores, fugit ipsam porro a esse, mollitia debitis alias
          aperiam dolorum soluta nesciunt eveniet cum ullam sed pariatur!
          Facere, numquam quas?
        </p>
      </TabsContent>
    </Tabs>
  )
}
