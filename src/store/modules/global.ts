import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface GlobalStore {
  themeMode: 'light' | 'dark'
  toggleTheme: () => void
}

export const useGlobalStore = create<GlobalStore>()(immer(
  persist(
    devtools(set => ({
      themeMode: 'light',
      toggleTheme: () => set((state) => {
        document.body.classList.toggle('dark')
        return { themeMode: state.themeMode === 'light' ? 'dark' : 'light' }
      }),
    }), {
      name: 'Global',
      enabled: import.meta.env.DEV,
    }),
    {
      name: 'Global',
      storage: createJSONStorage(() => localStorage),
    },
  ),
))

// export const themeMode = () => useGlobalStore((state) => state.themeMode)
