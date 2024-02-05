import { create } from 'zustand'

export type Tab = {
  id: string
  label: string
  content: string
  reference: string
}

interface Store {
  tabs: Tab[]
  selected: string

  addTab: (data: Tab) => void
  removeTab: (id: string) => void

  changeSelected: (id: string) => void
}

export const useTabsStore = create<Store>((set) => ({
  tabs: [],
  selected: '',

  addTab: (data: Tab) => {
    // const tabs = get().tabs
    // const selected = get().selected

    // const findTabWithSameReference = tabs.find(
    //   (tab) => tab.reference === data.reference,
    // )

    // if (findTabWithSameReference && selected !== findTabWithSameReference.id) {
    //   set(() => ({
    //     selected: findTabWithSameReference.id,
    //   }))

    //   return
    // }

    set((state) => ({
      tabs: [...state.tabs, data],
      selected: data.id,
    }))
  },

  removeTab: (id: string) =>
    set((state) => {
      const tabIndex = state.tabs.findIndex((tab) => tab.id === id)

      let tabIndexToSelect = 0

      if (state.tabs.length > 1) {
        if (tabIndex === 0) {
          tabIndexToSelect = tabIndex + 1
        }

        if (tabIndex > 0) {
          tabIndexToSelect = tabIndex - 1
        }
      }

      const tabSelected =
        state.tabs.length > 1 ? state.tabs[tabIndexToSelect].id : ''

      return {
        tabs: state.tabs.filter((tab) => tab.id !== id),
        selected: tabSelected,
      }
    }),

  changeSelected: (id: string) =>
    set(() => ({
      selected: id,
    })),
}))
