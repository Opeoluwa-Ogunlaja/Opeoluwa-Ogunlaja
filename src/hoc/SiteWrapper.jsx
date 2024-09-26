import React from 'react'
import { twMerge } from 'tailwind-merge'

const SiteWrapper = ({ children, className }) => {
  return <main className={twMerge('mt-64 max-lg:px-24 lg:px-64', className)}>{children}</main>
}

export default SiteWrapper
