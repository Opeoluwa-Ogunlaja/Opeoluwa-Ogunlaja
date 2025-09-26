import { useCallback, useMemo, useReducer } from 'react'
import { ModalContext } from './ModalContext'
import { ModalUpdateContext } from './ModalUpdateContext'

const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        open: true,
        openId: action.openId,
        misc: action.misc ?? {}
      }
    case 'close':
      return {
        ...state,
        open: false,
        openId: '',
        misc: {}
      }
    default:
      return state
  }
}
const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { isOpen: false, openId: '', misc: {} })

  const memoState = useMemo(() => state, [state])

  const openModal = useCallback(
    (openId, misc) => dispatch({ type: 'open', openId, misc }),
    [dispatch]
  )
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
