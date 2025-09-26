import React, { Suspense } from 'react'
import Modals from '../components/Modal'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Suspense fallback="...loading">
        <Outlet />
      </Suspense>
      <Modals />
    </>
  )
}

export default Layout
