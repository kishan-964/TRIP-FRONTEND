import React from 'react'

import Navbar from '../commponents/common/Navbar'
import Hero from '../commponents/LandingComponents/Hero'
import Features from '../commponents/LandingComponents/Features'
import FAQ from '../commponents/LandingComponents/FAQ'
import useAuth from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'



const Landing = () => {
  const { token } = useAuth();

  if(token){
    return (
      <Navigate to="/dashboard" />
    )
  }
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