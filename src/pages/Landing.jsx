import React from 'react'

import Navbar from '../commponents/common/Navbar'
import Hero from '../commponents/LandingComponents/Hero'
import Features from '../commponents/LandingComponents/Features'
import FAQ from '../commponents/LandingComponents/FAQ'
import useAuth from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'
import ContactCard from '@/commponents/LandingComponents/Contact'
import About from '@/commponents/LandingComponents/About'
import Gallery from '@/commponents/LandingComponents/Gallery'
import Destinations from '@/commponents/LandingComponents/Desitinations'
import Connections from '@/commponents/LandingComponents/Connection'
import Testimonials from '@/commponents/LandingComponents/Testinonials'
import Footer from '@/commponents/LandingComponents/Footer'




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
      <Destinations />
      <Gallery />
      <About />
      <Features />
      <FAQ />
      <Connections />
      <Testimonials />
      <ContactCard />
      <Footer />
      

      </div>
  )
}

export default Landing