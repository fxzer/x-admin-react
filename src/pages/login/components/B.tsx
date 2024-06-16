import { useCounterStore } from '@/store'

import { Button } from '@/components/ui/button'

function B() {
  const { count, total, inc, dec, updateDeep, updateTotal } = useCounterStore()
  return (
    <div className="bg-green/20 space-x-4">

      {count}
      {' '}
      {total}
      <Button onClick={inc}>+</Button>
      <Button onClick={dec}>-</Button>
      <Button onClick={updateTotal}>updateTotal</Button>
      <Button onClick={updateDeep}>deep</Button>
    </div>
  )
}

export default B
