import { useContext } from 'react'
import { ModalUpdateContext } from '../contexts/ModalUpdateContext'

export const useModalUpdate = () => useContext(ModalUpdateContext)
