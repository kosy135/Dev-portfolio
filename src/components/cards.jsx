import React from 'react'

 function cards() {
    const creators = [
        {id:1, img: '/Artist-Avatar.png', name:'Keepitreal', description:'Total Sales:', amount:'34.53', chain:'ETH'},
        {id:2, img: '/Artist-Avatar.(1).png', name:'DigiLab', description:'Total Sales:', amount:'34.53', chain:'ETH'},
        {id:3, img: '/Artist-Avatar.(2).png', name:'GravityOne', description:'Total Sales:', amount:'34.53', chain:'ETH'},
        {id:4, img: '/Artist-Avatar.(3).png', name:'Juanie', description:'Total Sales:', amount:'34.53', chain:'ETH'},
        {id:5, img: '/Artist-Avatar.(4).png', name:'BlueWhale', description:'Total Sales:', amount:'34.53', chain:'ETH'},
        {id:6, img: '/Artist-Avatar.(5).png', name:'Mr Fox', description:'Total Sales:', amount:'34.53', chain:'ETH'},
        {id:7, img: '/Artist-Avatar.(6).png', name:'Shroomie', description:'Total Sales:', amount:'34.53', chain:'ETH'},
        {id:8, img: '/Avatar.png', name:'Robotica', description:'Total Sales:', amount:'34.53', chain:'ETH'},
        {id:9, img: '/Avatar.(1).png', name:'RustyRobot', description:'Total Sales:', amount:'34.53', chain:'ETH'},
        {id:10, img: '/Avatar-Placeholder.png', name:'Animakid', description:'Total Sales:', amount:'34.53', chain:'ETH'},
        {id:11, img: '/Artist-Avatar.(7).png', name:'Dotgu', description:'Total Sales:', amount:'34.53', chain:'ETH'},
        {id:12, img: '/Artist-Avatar.(8).png', name:'Ghiblier', description:'Total Sales:', amount:'34.53', chain:'ETH'},
    ];

  return (
    <div className='grid grid-cols-4 gap-5 pb-30'>
        {creators.map((creator)=>(
            <div
            key={creator}
            className='bg-gray-500 rounded-2xl mt-10 pb-5'>
                <div className='bg-[#2B2B2B] w-5 h-5 rounded-full text-sm ml-7 mt-4 grid place-items-center'>{creator.id}</div>
                <div className='grid place-items-center p-4'>
                    <img src={creator.img} alt="Artist-avatar" className=''/>
                    <h3 className=' font-bold text-2xl'>{creator.name}</h3>
                    <div className='flex gap-3'>
                     <p className='text-2sm opacity-50'>{creator.description}</p>
                      <p className='font-sm'>{creator.amount}</p>
                      <p>{creator.chain}</p>
                    </div>
                </div>
            </div>

        ))}
    </div>
  )
}
export default cards