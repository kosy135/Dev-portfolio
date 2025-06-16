import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
        <input type="text" className='border'/>
        <input type="text" className='border'/>

        <Link to='/artpage' className='text-black bg-red-600 p-5'>Sign Up</Link>
    </div>
  )
}
