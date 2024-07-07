import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

/**
 * @typedef {import('class-variance-authority').VariantProps<typeof button>} ButtonVariants
 */

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig['theme']}
 */

const button = cva(
  'cta-btn p-12 font-semibold rounded-sm text-16 font-axiforma transition-all box-content shadow-md',
  {
    variants: {
      color: {
        primary: 'bg-green text-neutral-dark-500 primary',
        secondary: 'bg-[transparent] text-green border-2 border-green secondary'
      }
    },
    defaultVariants: {
      color: 'primary'
    }
  }
)

const Button = ({ color, children, className }) => {
  return <button className={twMerge(button({ color }), className)}>{children}</button>
}

export default Button
