import React from 'react'

 function Branch() {
  return (
    <div className='relative h-screen w-full mt-20'>
       <div
          className='absolute inset-0 bg-[url(\mushroom.jpg)] bg-cover bg-center z-0'>
        </div>
        <div className='absolute inset-0 bg-gradient-to-b from-black via-purple-800 to-purple-700 opacity-50 z-10'></div>
        <div className='relative flex items-center justify-between text-white px-20 z-20 h-full pt-80'>
             <div className=''>
               <div className='flex items-center gap-2 bg-[#3B3B3B] px-3 rounded-2xl w-30'>
                <img src="/Artist-Avatar.(6).png" alt="shronies" className='h-5' />
                <h4>Shronies</h4>
              </div>
              <div>
                <h4 className='font-bold text-3xl mt-7'>Magic Mushrooms</h4>
              </div>
              <button className='bg-white flex w-45 bl-purple-700 gap-2 h-10 items-center pl-6 rounded-2xl text-black mt-5'>
            <img src="/RocketLaunch.png" alt="Roket Launch" />See NFT</button>
            </div>
             
            <div className='mt-6 bg-black opacity-40 p-4 rounded-md'>
                <p>Auction ends in:</p>
                <div className='flex gap-4'>
                   <div>
                      <h5 className='text-2xl font-bold text-white'>59    :  </h5>
                      <h5 className='text-sm'>Hours</h5>
                   </div>
                  <div>
                     <h5 className='text-2xl font-bold text-white'>59    :  </h5>
                     <h5  className='text-sm'>Minutes</h5>
                  </div>
                  <div>
                     <h5 className='text-2xl font-bold text-white'>59</h5>
                     <h5  className='text-sm'>Seconds</h5>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Branch