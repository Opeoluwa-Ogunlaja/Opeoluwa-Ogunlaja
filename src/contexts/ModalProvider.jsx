import { useCallback, useMemo, useReducer } from 'react'
import { ModalContext } from './ModalContext'
import { ModalUpdateContext } from './ModalUpdateContext'

const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        open: true,
        openId: action.openId
      }
    case 'close':
      return {
        ...state,
        open: false,
        openId: ''
      }
    default:
      return state
  }
}
const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { isOpen: false, openId: '' })

  const memoState = useMemo(() => state, [state])

  const openModal = useCallback(openId => dispatch({ type: 'open', openId }), [dispatch])
  const closeModal = useCallback(() => dispatch({ type: 'close' }), [dispatch])

  return (
    <ModalContext.Provider value={memoState}>
      <ModalUpdateContext.Provider value={{ closeModal, openModal }}>
        {children}
      </ModalUpdateContext.Provider>
    </ModalContext.Provider>
  )
}

export default ModalProvider
