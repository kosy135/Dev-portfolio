import React from 'react'
import Navbar from '../components/Reusable/Nav'
import { Link } from 'react-router-dom'
import Footer from '../components/Reusable/Footer'
import Form from '../components/form'


export default function SignUp() {


  return (
    <div className='bg-[#3B3B3B] text-white'>
      <div>
        <Navbar/>
      </div>
      <div className='flex '>
        <img src="/Image-Placeholder-(2).png" alt="" className='-mb-5'/>
        <div className='px-35'>
          <h2 className='mt-30 text-2xl'>Create Accounts</h2>
          <p className='mt-5 text-sm pb-5'>Welcome! Enter Your Details And Start <br/>Creating Collecting And Selling NFTs</p>
         <Form/>
        </div>
      </div>
       <Footer/>
    </div>
  )
}
