import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface CounterStore {
  count: number
  inc: () => void
  dec: () => void
  updateDeep: () => void
}
// function createx(p: () => any, name: string) {
//   return create<CounterStore>()(immer(
//     persist(
//       devtools(p, {
//         name,
//         enabled: import.meta.env.DEV,
//       }),
//       {
//         name: 'counter',
//         storage: createJSONStorage(() => localStorage),
//         partialize: state => ({ count: state.count, total: state.total, v: 'djflkdsfjkdls' }),
//       },
//     ),
//   ))
// }
export const useCounterStore = create<CounterStore>()(immer(
  persist(
    devtools((set, get) => ({
      count: 1,
      total: 0,
      obj: {
        a: 1,
        b: {
          c: 2,
          d: {
            e: 3,
          },
        },
      },
      dbcount: () => get().count * 2,
      inc: () => set(state => ({ count: state.count + 1 })),
      dec: () => set(state => ({ count: state.count - 1 })),
      updateTotal: () => set(state => ({ total: state.total + 1 })),
      // updateDeep: () => set(state => ({ obj: { ...state.obj, b: { ...state.obj.b, d: { ...state.obj.b.d, e: state.obj.b.d.e + 1 } } } })),
      updateDeep: () => set({}, true),
      // updateDeep: () => set((state) => { state.obj.b.d.e += 1 }),

    }), {
      name: 'counter',
      enabled: import.meta.env.DEV,
    }),
    {
      name: 'counter',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ count: state.count, total: state.total, v: 'djflkdsfjkdls' }),
    },
  ),
))
