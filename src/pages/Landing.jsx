import React from 'react'

import Navbar from '../commponents/common/Navbar'
import Hero from '../commponents/LandingComponents/Hero'
import Features from '../commponents/LandingComponents/Features'
import FAQ from '../commponents/LandingComponents/FAQ'
import Login from './Login'

const Landing = () => {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      </div>
  )
}

export default Landing