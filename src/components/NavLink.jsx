import { NavLink } from 'react-router-dom'

const navlink = cva(
    'nav-link font-medium text-16 font-quicksand',
    {
      variants: {
        color: {
          light: 'text-neutral-dark-200',
          dark: 'text-'
        }
      },
      defaultVariants: {
        color: 'purple'
      }
    }
  )
  
  const NavLink = ({ color, children, className }) => {
    return <NavLink className={ () => twMerge(navlink({ color }), '',  className)}>{children}</NavLink>
  }

export default NavLink