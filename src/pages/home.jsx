import React from 'react'
import Navbar from '../components/reuseable/navbar'
import Homehero from '../components/homehero'
import Section from '../components/section'


 function home() {
  return (
    <div className='bg-[#2B2B2B]'>
        <Navbar/>
        <Homehero/>
        <Section/>
    </div>
  )
}
export default home;