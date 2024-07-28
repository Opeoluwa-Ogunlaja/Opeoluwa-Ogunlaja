import React from 'react'
import Modals from '../components/Modal'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Outlet />
      <Modals />
    </>
  )
}

export default Layout
