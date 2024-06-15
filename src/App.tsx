import React, { useState } from 'react'
import '@/App.css'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import Router from './router'

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Router/>
    
  )
}

export default App
