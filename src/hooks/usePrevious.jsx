import { useRef } from 'react'

export default function usePrevious(state) {
  const currentStateRef = useRef()
  const previousStateRef = useRef()

  if (currentStateRef.current !== state) {
    previousStateRef.current = currentStateRef.current
    currentStateRef.current = state
  }

  return previousStateRef.current
}
