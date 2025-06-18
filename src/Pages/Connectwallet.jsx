import React from 'react'
import Navbar from '../components/Reusable/Nav'
import { Link } from 'react-router-dom'
import Footer from '../components/Reusable/Footer'

 function Connectwallet() {
  return (
    <div className='bg-[#3B3B3B]'>
      <div>
         <Navbar/>
      </div>
      <div className='flex text-white'>
          <img src="/Image-Placeholder-(2).png" alt="" className='-mb-5' />
         <div className='px-35'>
                <h2 className='mt-40 text-2xl'>Connect Wallet</h2>
                <p className='mt-5 text-sm pb-5'>Choose a wallet you want to connect <br/>There are several wallet providers</p>
                <div className=''>
                  <button className='flex border border-purple-500 text-white w-60 px-3 rounded-2xl py-1.5 items-center'>
                  <img src="/Metamask.png" alt="Metamask" className='px-3'/>
                  <h3>Metamask</h3>
                  </button>
                  <button className='flex border border-purple-500 text-white w-60 px-3 rounded-2xl mt-5 py-1.5 items-center'>
                  <img src="/WalletConnect.png" alt="wallet connect" className='px-3'/>
                  <h3>Wallet Connect</h3>
                  </button>
                 <button className='flex border border-purple-500 text-white w-60 px-3 rounded-2xl mt-5 py-1.5 items-center'>
                  <img src="/Coinbase.png" alt="Coinbase" className='px-3'/>
                  <h3>Coinbase</h3>
                 </button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
export default Connectwallet