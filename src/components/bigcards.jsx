import React from 'react'

 function bigcards() {
  const nfts = [
    {id:1, img:'/Image.png', name:'Distant Galaxy', img2:'Artist-Avatar.png', description:'MoonDancer', 
      tag:'Price', price:'1.03 ETH', size:'Height: Bid', amount:'0.33Eth'},
    {id:2, img:'/Image.(1).png', name:'Life On Edena', img2:'Artist-Avatar.png', description:'NebulaKid', 
      tag:'Price', price:'1.03 ETH', size:'Height: Bid', amount:'0.33Eth'},
    {id:3, img:'/Image-Placeholder.(1).png', name:'AstroFiction', img2:'Artist-Avatar.png', description:'Spaceone', 
      tag:'Price', price:'1.03 ETH', size:'Height: Bid', amount:'0.33Eth'}
  ]
  return (
    <div className='flex gap-9'>
      {nfts.map((nft) =>(
        <div
        key={nft}
        className='bg-gray-600 rounded-2xl'>
          <img src={nft.img} alt=''/>
        <div className='px-6 mt-5' >
          <h3 className='font-bold text-2xl pb-2'>{nft.name}</h3>
          <div className='flex items-center gap-3 pb-5'>
            <img src={nft.img2} alt="" className='h-6' />
            <p>{nft.description}</p>
          </div>
          <div className='flex justify-between'>
            <div className='pb-2'>
              <h4 className='opacity-50 text-sm'>{nft.tag}</h4>
              <h4>{nft.price}</h4>
            </div>
            <div>
              <h4 className='text-sm opacity-50'>{nft.size}</h4>
              <h4>{nft.amount}</h4>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}
export default bigcards