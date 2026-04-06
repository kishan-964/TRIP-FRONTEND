import React from 'react'
import CustomButtton from './CustomButtton'

const Navbar = () => {
  return (
    <header className='px-20 py-6 flex items-center justify-between'>
      {/* left part */}
      <div>
       <h1 className='text-4xl font-semibold'><span className='text-blue-500 text-5xl'>C</span>halti<span className='text-blue-500'>T</span>rip</h1>   
       </div>
         {/* right part */}
        <div className='flex items-center gap-16'>
          <nav className='space-x-8 text-lg text-gray-700 font-medium [&>a]:hover:text-black [&>a]:hover:underline'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/help">Help</a>
            <a href="/contact">Contact</a>
          </nav>
          <CustomButtton text="Login" />
          </div>

    </header>
  )
}

export default Navbar