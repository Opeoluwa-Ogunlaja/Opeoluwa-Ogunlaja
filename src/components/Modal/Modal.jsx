import { useEffect, useRef } from 'react'
import { useModalState } from '../../hooks/useModalState'
import { createPortal } from 'react-dom'
import { useModalUpdate } from '../../hooks/useModalUpdate'
import { twMerge } from 'tailwind-merge'
import useMediaQuery from '../../hooks/useMediaQuery'
import { motion } from 'framer-motion'

const Modal = ({ children, id, onClose = function () {}, className }) => {
  const { open, openId } = useModalState()
  const { closeModal } = useModalUpdate()
  const dialogRef = useRef()
  const largeScreen = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    if (!open) dialogRef.current.close()
    if (open && openId == id) dialogRef.current.showModal()
  }, [open])

  useEffect(() => {
    if (open && !largeScreen) closeModal()
  }, [largeScreen])

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog == null) return

    dialog.addEventListener('close', onClose)

    return () => {
      dialog.removeEventListener('close', onClose)
    }
  }, [onClose])

  return createPortal(
    <motion.dialog className={twMerge('', className)} ref={dialogRef}>
      {children}
    </motion.dialog>,
    document.body
  )
}

export default Modal
