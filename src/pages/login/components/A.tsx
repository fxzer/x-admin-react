import { useCounterStore } from '@/store'

function A() {
  const obj = useCounterStore(state => state.obj)
  return (
    <div className="bg-amber/20">
      A works
      <div>
        { JSON.stringify(obj)}
      </div>
    </div>
  )
}

export default A
