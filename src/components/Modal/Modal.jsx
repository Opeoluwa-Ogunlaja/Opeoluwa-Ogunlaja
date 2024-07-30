import { useEffect, useRef } from 'react'
import { useModalState } from '../../hooks/useModalState'
import { createPortal } from 'react-dom'
import { useModalUpdate } from '../../hooks/useModalUpdate'
import { twMerge } from 'tailwind-merge'
import useMediaQuery from '../../hooks/useMediaQuery'
import { AnimatePresence, motion } from 'framer-motion'
import Backdrop from '../Backdrop'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

const Modal = ({ children, id, onClose = function () {}, className }) => {
  const { open, openId } = useModalState()
  const { closeModal } = useModalUpdate()
  const dialogRef = useRef()
  const largeScreen = useMediaQuery('(min-width: 768px)')
  const isReallyOpen = open && openId == id

  useEffect(() => {
    if (open && !largeScreen) closeModal()
  }, [largeScreen])

  // useEffect(() => {
  //   const dialog = dialogRef.current
  //   if (dialog == null) return

  //   dialog.addEventListener('close', onClose)

  //   return () => {
  //     dialog.removeEventListener('close', onClose)
  //   }
  // }, [onClose])

  return createPortal(
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isReallyOpen && (
        <Backdrop onClick={closeModal}>
          <motion.div
            onClick={e => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={twMerge('', className)}
            ref={dialogRef}
          >
            {children}
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default Modal
