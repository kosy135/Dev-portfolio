import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return(
        <div>
                <nav className="bg-[#2B2B2B] text-white flex justify-between items-center h-20 px-15">
        <div className="flex gap-2 w-50">
          <img src="public/Images/Storefront.png" alt="" />
          <p className="pt-1.5">NFT Marketplace</p>
        </div>
        <div>
          <ul className="flex gap-7 items-center">
            <Link to='/Marketplace'>
            <button className='hover:bg-purple-500 hover:font-bold hover:px-5 hover:py-3 hover:rounded-2xl'>Marketplace</button>
            </Link>
            <li>Rankings</li>
            <Link to='/Connectwallet'>
            <button className='hover:bg-purple-500 hover:font-bold hover:px-5 hover:py-3 hover:rounded-2xl'>Connect a wallet</button>
            </Link>
            <Link to='/signup'>
              <button className="bg-[#A259FF] h-10 w-20 rounded-3xl flex w-30 items-center pl-5"> <img src="public/Images/User.png" className="h-5" alt="" />sign up</button>
            </Link>
          </ul>
        </div>
      </nav>
        </div>

    )
}

export default Navbar