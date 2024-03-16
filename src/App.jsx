import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import DateCom from './Components/Date'

const App = () => {
  return (
   <div className=' bg-black text-white'>
    <Navbar/>
    <Hero/>
    <DateCom/>
   </div>
  )
}

export default App