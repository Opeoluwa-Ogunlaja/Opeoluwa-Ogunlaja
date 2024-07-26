import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { useToggle } from '../hooks/useToggle'
import { FullLogo } from '../assets/icons'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import Navlink from './NavLink'

const Topnav = () => {
  //   const largeScreen = useMediaQuery('(max-width:976px)')
  const [isOpen, toggle] = useToggle(false)
  return (
    <header className="relative flex items-center max-lg:p-24 max-fold:p-12 lg:px-64 lg:py-32">
      <div className="logo flex items-center text-green">
        <FullLogo className="aspect-auto w-192 scale-90 lg:w-auto" />
      </div>

      <div
        className={twMerge(
          'z-30 ml-auto flex items-center gap-16 font-quicksand transition max-lg:rounded-lg max-sm:invisible max-sm:absolute max-sm:inset-x-[0] max-sm:mt-128 max-sm:w-max max-sm:-translate-x-24 max-sm:translate-y-24 max-sm:flex-col max-sm:bg-neutral-1400 max-sm:px-32 max-sm:py-16 max-sm:opacity-0',
          clsx({ ['max-sm:visible max-sm:opacity-100']: isOpen })
        )}
      >
        <Navlink to="/">Home</Navlink>
        <Navlink to="/projects">Projects</Navlink>
        <Navlink to="/about">About</Navlink>
        <Navlink to="/contact">Contact Us</Navlink>
      </div>
      <button
        className="ml-auto text-xl text-white max-sm:visible sm:sr-only sm:invisible"
        onClick={toggle}
      >
        {!isOpen ? <>&#9776;</> : <>&times;</>}
      </button>
    </header>
  )
}

export default Topnav
