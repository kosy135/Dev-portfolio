import React from 'react'

function prompt() {
   const steps = [
    {id:1, img:'/Icon.png', CTA:'Set Up Your Wallet', instrctions:'Set up your wallet of yours. Connect it to the Animarket by clicking the wallet icon in the top right corner'},
    {id:2, img:'/Icon.(1).png', CTA:'Create Collection', instrctions:'Upload your work and setup your collection. Add a description, social links and floor price'},
    {id:3, img:'/Icon.(2).png', CTA:'Start Earning', instrctions:'Choose between auction and fixed price listings. Start earning by selling your NFTs or trading others'}
   ]


  return (
    <div className='grid grid-cols-3 gap-4 mt-15'>
        {steps.map((step) =>(
            <div
            key={step}
            className='grid bg-gray-600 place-items-center text-center px-5 rounded-2xl'
            >
                <img src={step.img} alt="" />
                <h4 className='font-bold pb-1'>{step.CTA}</h4>
                <p className='text-sm pb-5'>{step.instrctions}</p>
            </div>
        ))}
    </div>
  )
}
export default prompt