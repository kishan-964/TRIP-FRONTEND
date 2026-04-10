import React from 'react'
import CustomButtton from '../common/CustomButtton'
import {Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className='relative h-[92dvh] overflow-hidden flex items-center justify-center' >

      {/* background image */}
     <div>
      <img src="/hero.jpg" alt="ChaltiTrip Hero" className='scale-x-[-1]'/>
     </div>

      {/* black overlay */}
      <div className='h-[92dvh] w-full bg-black  absolute opacity-60 left-0 top-0'></div>

      {/* main content */}
      <div className='absolute w-1/2 m-auto text-center'>
        <h1 className='text-5xl font-bold text-white mb-6'><span className='text-yellow-200 text-8xl'>D</span>iscover Your <span className='text-yellow-200'>Next</span> Adventure</h1>
        <p className=' text-3xl font-semibold text-yellow-100 mb-8'>Explore the world with our expertly curated travel experiences.
          <br />Uncover the hidden gems and create unforgettable memories.Unbeatable trop expriences for memorires</p>


          <a href="/register">
          <CustomButtton text="Get Started" />
          </a>

          

      </div>
    </section>
  )
}

export default Hero