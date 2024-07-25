import { useEffect, useRef, useCallback } from 'react'

export const useTimeout = (callback, delay, autoplay) => {
  const callbackRef = useRef(callback)
  const timeOutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeOutRef.current = setTimeout(callbackRef.current, delay)
  }, [delay])

  const clear = useCallback(() => {
    clearTimeout(timeOutRef.current)
  }, [])

  useEffect(() => {
    if (autoplay) {
      set()
    }

    return clear
  })

  const reset = useCallback(() => {
    clear()
    set()
  }, [set, clear])

  return [clear, reset, set]
}
