import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

function Login() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div>
      Login works!
      <button className="border-1 border-border">button</button>
      <div className="h-screen">
        <Button>123</Button>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="border rounded-md"
        />
        <div className="bg-ring animate-accordion-down">1</div>
        <div className="flex-center md:text-md h-20 rounded-2xl text-shadow shadow-2xl backdrop-blur-xl md:(text-pink)">123</div>
        <div className="h-40 bg-pink/10 text-center text-2xl text-red leading-5 backdrop-blur-lg">
          This text is red
        </div>
      </div>
    </div>
  )
}

export default Login
