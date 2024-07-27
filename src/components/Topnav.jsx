import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { useToggle } from '../hooks/useToggle'
import { FullLogo } from '../assets/icons'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import Navlink from './NavLink'

const Topnav = () => {
  // const largeScreen = useMediaQuery('(max-width:976px)')
  const [isOpen, toggle] = useToggle(false)
  return (
    <header className="relative flex items-center max-lg:p-24 max-fold:p-12 lg:px-64 lg:py-32">
      <div className="logo flex items-center text-green">
        <FullLogo className="aspect-auto w-192 scale-90 lg:w-auto" />
      </div>

      <div
        className={twMerge(
          'z-30 ml-auto flex items-center gap-16 font-quicksand transition max-md:invisible max-md:absolute max-md:inset-x-[0] max-md:mt-128 max-md:w-max max-md:-translate-x-24 max-md:translate-y-24 max-md:flex-col max-md:rounded-lg max-md:bg-neutral-1400 max-md:px-32 max-md:py-16 max-md:opacity-0',
          clsx({ ['visible max-md:opacity-100']: isOpen })
        )}
      >
        <Navlink to="/">Home</Navlink>
        <Navlink to="/projects">Projects</Navlink>
        <Navlink to="/about">About</Navlink>
        <Navlink to="/contact">Contact Us</Navlink>
      </div>
      <button
        className="ml-auto text-xl text-white max-md:visible md:sr-only md:invisible"
        onClick={toggle}
      >
        {!isOpen ? <>&#9776;</> : <>&times;</>}
      </button>
    </header>
  )
}

export default Topnav
