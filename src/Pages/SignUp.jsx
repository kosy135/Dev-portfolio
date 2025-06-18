import React from 'react'
import Navbar from '../components/Reusable/Nav'
import { Link } from 'react-router-dom'
import Footer from '../components/Reusable/Footer'

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
          <div className=''>
          <button className='flex bg-white text-black w-60 px-3 rounded-2xl py-1.5'>
            <img src="/User-(1).png" alt=""/>
            <h3>Username</h3>
          </button>
          <button className='flex bg-white text-black w-60 px-3 rounded-2xl mt-5 py-1.5'>
            <img src="/EnvelopeSimple.png" alt="" />
            <h3>Email Address</h3>
          </button>
          <button className='flex bg-white text-black w-60 px-3 rounded-2xl mt-5 py-1.5'>
            <img src="/LockKey.png" alt="" />
            <h3>Password</h3>
          </button>
          <button className='flex bg-white text-black w-60 px-3 rounded-2xl mt-5 py-1.5'>
            <img src="/LockKey.png" alt="" />
            <h3>Confirm Password</h3>
          </button>
          <button className='mt-5 text-white bg-purple-600 w-60 py-1.5 rounded-2xl'>
           <Link to='/artpage'>Create account</Link>
           </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
