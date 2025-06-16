import React from 'react'

 function homehero() {
  return (
    <div className='flex mt-15 px-35 justify-between pb-15'>
        <div className='text-white'>
            <h2 className='text-6xl w-90 mb-5 font-bold'>Discover Digital Art & Collect NFTs</h2>
            <p className='w-90 mb-5'>NFT Marketplace UI Created With Anima For Figma.Collect ,Buy And Sell Art From More Than 20k NFT Artists.</p>
            <button className='flex w-45 bg-purple-700 gap-2 h-10 items-center pl-6 rounded-2xl'><img src="/RocketLaunch.png" alt="Roket Launch" />Get Started</button>
            <ul className='flex justify-between w-90 mt-7 font-bold'>
              <li>240K+</li>
              <li>100K+</li>
              <li>240k+</li>
            </ul>
            <ul className='flex justify-between w-90'>
              <li>Total Sales</li>
              <li>Auctions</li>
              <li>Artists</li>
            </ul>
        </div>
        <div className=''>
          <img src="/Image.Placeholder.png" alt="Image Placeholder" className='h-90'/>
          <div className='text-white pt-4 bg-gray-600 px-4 rounded-b-xl'>
            <p>Space Walking</p>
            <div className='flex items-center py-4 gap-4'>
              <img src="/Avatar-Placeholder.png" alt="Avatar" className='h-5'/>
              <p>Animakid</p>
            </div>
          </div>
        </div>
    </div>
  )
}
export default homehero;