import React from 'react'
import Navbar from '../Components/Reusable/Nav'
import Artpage from './Artpage'
import Hero from '../Components/Hero';

function Homepage() {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Artpage/>
        </div>
    )
}

export default Homepage;