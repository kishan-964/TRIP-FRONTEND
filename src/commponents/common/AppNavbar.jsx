import React from 'react'
import CustomButtton from './CustomButtton'
import { Plane } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { jwtDecode } from 'jwt-decode'


const Navbar = () => {
   const navigate = useNavigate();
   const {token,logout} = useAuth();


   const handleLogout = () => {
    logout();
    navigate("/login")
   }

   const decodedToken = token ? jwtDecode(token) : {};

  return (
    <header className='px-8 py-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between bg-slate-950/95 border-b border-slate-800 text-white'>
      <div>
       <h1 className='text-3xl md:text-4xl font-semibold'>
         <span className='text-cyan-400 text-5xl'>C</span>halti
         <Plane className='inline-block text-cyan-400 mx-2' size={32} />
         <span className='text-cyan-400'>T</span>rip
       </h1>
      </div>
      <div className='flex flex-col gap-4 md:flex-row md:items-center'>
        <nav className='flex flex-wrap items-center gap-6 text-lg text-slate-200 font-medium'>
          {decodedToken.role === "admin" ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/trips">Trips</Link>
              <Link to="/bookings">Bookings</Link>
              <Link to="/contact-list">Contact List</Link>
            </>
          ) : (
            <>
              <Link to="/client/dashboard">Dashboard</Link>
              <Link to="/client/trips">Trips</Link>
              <Link to="/client/bookings">Bookings</Link>
              <Link to="/client/blog">Blogs</Link>
            </>
          )}
        </nav>
        <div onClick={handleLogout}>
          <CustomButtton text="Logout" />
        </div>
      </div>
    </header>
  )
}

export default Navbar