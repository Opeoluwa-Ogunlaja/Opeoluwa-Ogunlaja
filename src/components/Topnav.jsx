import React, { useRef } from 'react'
import { useToggle } from '../hooks/useToggle'
import { FullLogo } from '../assets/icons'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import Navlink from './NavLink'
import { motion } from 'framer-motion'
import { navDown } from '../data/animations'
import useClickOutside from '../hooks/useClickOutside'

const Topnav = () => {
  // const largeScreen = useMediaQuery('(max-width:976px)')
  const [isOpen, toggle, setOpen] = useToggle(false)
  const navRef = useRef()
  useClickOutside(navRef, e => {
    if (e.target.classList.contains('nav-toggler')) return
    setOpen(false)
  })

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navDown}
      className="relative z-50 flex items-center max-lg:p-24 max-fold:p-12 lg:px-64 lg:py-32"
    >
      <div className="logo flex items-center text-green">
        <FullLogo className="aspect-auto w-192 scale-90 lg:w-auto" />
      </div>

      <motion.div
        className={twMerge(
          'z-[3000000] ml-auto flex items-center gap-16 font-quicksand transition max-md:invisible max-md:absolute max-md:inset-x-[0] max-md:mt-128 max-md:w-max max-md:-translate-x-24 max-md:translate-y-24 max-md:flex-col max-md:rounded-lg max-md:bg-neutral-1400 max-md:px-32 max-md:py-16 max-md:opacity-0 md:w-fit',
          clsx({ ['visible max-md:opacity-100']: isOpen })
        )}
        ref={navRef}
      >
        <Navlink to="/">Home</Navlink>
        <Navlink to="/projects">Projects</Navlink>
        <Navlink to="/about">About</Navlink>
        <Navlink to="/contact">Contact Us</Navlink>
      </motion.div>
      <button
        className="nav-toggler ml-auto text-xl text-white max-md:visible md:sr-only md:invisible"
        onClick={toggle}
      >
        {!isOpen ? <>&#9776;</> : <>&times;</>}
      </button>
    </motion.header>
  )
}

export default Topnav
