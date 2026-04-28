import AppNavbar from '@/commponents/common/AppNavbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  )
}

export default AppLayout