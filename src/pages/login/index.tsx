import React from 'react'
import A from './components/A'

import B from './components/B'
import { Button } from '@/components/ui/button'

function Login() {
  return (
    <div>

      <div className="h-screen">
        Login works!

        <button type="button" className="border-1 border-border">button</button>
        <div className="my-10 border-1"></div>
        <B></B>
        <A></A>
        <Button>123</Button>
        {/* <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="border rounded-md"
        /> */}
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
