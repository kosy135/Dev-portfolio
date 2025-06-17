import React from 'react'
import Cards from '../components/cards'
import Bigcards from '../components/bigcards'
import Prompt from '../components/prompt'
import Branch from './branch'


function section() {
  return (
  <div className='text-white'>
     <div className='px-35'>
      <h3 className='font-bold text-2xl pb-3'>Trending Collection</h3>
      <p>Check Our Weekly updated Trending Collection.</p>
     </div> 
    <div className='grid grid-cols-3 gap-5 mt-13 px-35'>
      <div className=''>
        <img src="/Primary-Photo-Placeholder.png" alt="Dog Avatar" />
       <div className='flex gap-6 h-21 mt-3'>
          <img src="/Secondary-Photo-Placeholder.png" alt="Mr Fox avata"/>
          <img src="/Secondary-Photo-Placeholder.(1).png" alt="Mr Fox avatar"/>
           <button className='bg-purple-700 px-7 rounded-2xl'>1025+</button>
        </div>
          <h2 className='font-bold mt-3'>DSGN Animals</h2>
       <div className='flex gap-3 mt-3'>
          <img src="/Artist-Avatar.(5).png" alt="Mr fox avatar" className='h-6'/>
          <h3 className='text-sm opacity-90'>MrFox</h3>
        </div>
     </div>
      <div className=''>
        <img src="/Primary-Photo-Placeholder.(1).png" alt="Magic mushroom Avatar" />
        <div className='flex gap-6 h-21 mt-3'>
          <img src="/Secondary-Photo-Placeholder.(2).png" alt="Magic mushroom Avatar" />
          <img src="/Secondary-Photo-Placeholder.(3).png" alt="Magic mushroom Avatar" />
          <button className='bg-purple-700 px-7 rounded-2xl'>1025+</button>
        </div>
        <h2 className='font-bold mt-3'>Magic Mushroom</h2>
        <div className='flex gap-3 mt-3'>
          <img src="/Artist-Avatar.(6).png" alt="Mr fox avatar" className='h-6'/>
          <h3 className='text-sm opacity-90'>Shroomie</h3>
        </div>
      </div>
      <div className=''>
        <img src="/Primary-Photo-Placeholder.(2).png" alt="Disco Machines" />
        <div className='flex gap-6 h-21 mt-3'>
         <img src="/Secondary-Photo-Placeholder.(4).png" alt="Disco Machines" />
         <img src="/Secondary-Photo-Placeholder.(5).png" alt="Disco Machine" />
         <button className='bg-purple-700 px-7 rounded-2xl'>1025+</button>
        </div>
        <h2 className='font-bold mt-3'>Disco Machines</h2>
        <div className='flex gap-3 mt-3'>
           <img src="/Asset.png" alt="Robot" className='h-6'/>
           <h3 className='text-sm opacity-90'>Bekind2Robots</h3>
        </div>
     </div>
    </div>
    <div className='mt-20 px-35'>
      <h2 className='font-bold pb-2 text-2xl'>Top Creators</h2>
      <div className='flex justify-between items-center'>
           <p className='text-sm'>Checkout Top Rated Creators On The NFT Marketplace</p>
           <button className='border border-purple-700 flex w-45 bl-purple-700 gap-2 h-10 items-center pl-6 rounded-2xl'>
            <img src="/RocketLaunch.png" alt="Roket Launch" />View Rankings</button>
      </div>
      <div>
        <Cards/>
      </div>
    </div>
      <div>
        <h3 className='font-bold text-3xl pb-3'>Discover More NFTs</h3>
        <div className='flex justify-between items-center pb-15'>
          <p className='text-sm'>Explore New Trending NFTs</p>
          <button className='border border-purple-700 flex w-45 bl-purple-700 gap-2 h-10 items-center pl-6 rounded-2xl'>
            <img src="/RocketLaunch.png" alt="Roket Launch" />See All</button>
        </div>
        <Bigcards/>
      </div>
       <div>
          <Branch/>
        </div>
      <div className='mt-25 px-35'>
        <p>How It Works</p>
        <p>Find Out How To Get Started</p>
        <Prompt/>
        <div className='flex mt-30 gap-10 items-center bg-gray-600 rounded-3xl h-90'>
           <div className=''>
            <img src="/Photo.png" alt="astronut" className='px-15 h-70'/>
          </div>
          <div className=''>
             <h4 className='text-3xl font-bold pb-5'>Join Our Weekly <br/>Digest</h4>
            <p className='pb-5'>Get Exclusive Promotions & Updates <br/>Straight To Your Inbox</p>
          </div>
       </div>
      </div>

  </div>
  
 

  )
}
export default section;