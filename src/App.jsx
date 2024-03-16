import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Date from './Components/Date'

const App = () => {
  return (
   <div className=' bg-black text-white'>
    <Navbar/>
    <Hero/>
    <Date/>
   </div>
  )
}

export default App