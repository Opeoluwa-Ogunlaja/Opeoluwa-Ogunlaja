import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const navlink = cva(
  'nav-link relative text-16 max-sm:text-14 font-quicksand flex items-center text-pretty text-center text-neutral-1100 transition-all hover:dark:text-purple hover:text-green'
)

const Navlink = ({ children, className, to, activeClass }) => {
  const active = 'dark:text-purple text-green'
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return twMerge(
          navlink({}),
          clsx({ [twMerge(active, activeClass, 'after:scale-100')]: isActive }),
          className
        )
      }}
    >
      {children}
    </NavLink>
  )
}

export default memo(Navlink)
