import clsx from 'clsx'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const Backdrop = ({ children, onClick, colored }) => {
  return (
    <motion.div
      onClick={onClick}
      className={twMerge('backdrop', clsx({ colored: colored }))}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
