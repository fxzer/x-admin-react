import React, { useState } from 'react'
import '@/App.css'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="h-screen ">
      <Button>123</Button>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="border rounded-md"
      />
      <div className="flex-center h-20 rounded-2xl text-shadow shadow-2xl backdrop-blur-xl">123</div>
    </div>
  )
}

export default App
