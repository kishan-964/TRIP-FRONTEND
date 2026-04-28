import React from 'react'
import CustomButtton from './CustomButtton'
import { Plane } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

const Navbar = () => {
   const navigate = useNavigate();
   const {logout} = useAuth();


   const handleLogout = () => {
    logout();
    navigate("/login")
    // clear user session or token
    // direct goto Landing page
   }

  return (
    
    <header className='px-20 py-6 flex items-center justify-between bg-violet-50' >
      {/* left part */}
      <div>
        
       <h1 className='text-4xl font-semibold'>
         <span className='text-blue-500 text-5xl'>C</span>halti
         <Plane className='inline-block text-blue-500 mx-2' size={35} />
         <span className='text-blue-500'>T</span>rip
       </h1>
       </div>
         {/* right part */}
        <div className='flex items-center gap-16'>
          <nav className='space-x-8 text-lg text-gray-700 font-medium [&>a]:hover:text-black [&>a]:hover:underline'>
            <a href="/dashboard">Dashboard</a>
            <a href="/trips">Trip</a>
            <a href="/bookings">Bookings</a>
            <a href="/blogs">Blogs</a>
          </nav>
           <div onClick={handleLogout}>
          <CustomButtton text="Logout" href="/logout" />
          </div>
           </div>
    </header>
  )
}

export default Navbar