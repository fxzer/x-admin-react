import process from 'node:process'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface CounterStore {
  count: number
  inc: () => void
  dec: () => void
}
export const useCounterStore = create<CounterStore>()(
  devtools(set => ({
    count: 1,
    inc: () => set(state => ({ count: state.count + 1 })),
    dec: () => set(state => ({ count: state.count - 1 })),
  }), {
    name: 'counter',
    enabled: process.env.NODE_ENV === 'development',
  }),
)
