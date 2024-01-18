import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  id: string
  name?: string
  email: string
  avatarUrl: string
}

interface SetCredentialsData {
  token: string
  user: User
}

interface Store {
  token: string
  user: User | null

  setCredentials: (data: SetCredentialsData) => void
  clearCredentials: () => void
}

export const useAuthStore = create(
  persist<Store>(
    (set) => ({
      token: '',
      user: null,
      setCredentials: ({ token, user }) => set(() => ({ token, user })),
      clearCredentials: () =>
        set(() => ({
          token: '',
          user: null,
        })),
    }),
    {
      name: 'mocha-auth',
    },
  ),
)
