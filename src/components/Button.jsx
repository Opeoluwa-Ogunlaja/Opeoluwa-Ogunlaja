import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

/**
 * @typedef {import('class-variance-authority').VariantProps<typeof button>} ButtonVariants
 */

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig['theme']}
 */ import { motion } from 'framer-motion'
import { memo } from 'react'

const button = cva(
  'cta-btn p-12 font-semibold rounded-sm max-lg:text-14 text-16 font-axiforma transition-all shadow-md disabled:bg-opacity-20',
  {
    variants: {
      color: {
        primary: 'bg-green text-neutral-9500 primary',
        secondary: 'bg-[transparent] text-green border-2 border-green secondary'
      }
    },
    defaultVariants: {
      color: 'primary'
    }
  }
)

const Button = props => {
  const { color, children, className, ...buttonProps } = props
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...buttonProps}
      className={twMerge(button({ color }), className)}
    >
      {children}
    </motion.button>
  )
}

export default memo(Button)
