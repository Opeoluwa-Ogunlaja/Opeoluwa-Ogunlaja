import { useRef, useEffect, useCallback } from 'react'

export const useInterval = (callback, delay, autoplay) => {
  const callbackRef = useRef(callback)
  const intervalRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    intervalRef.current = setInterval(callbackRef.current, delay)
  }, [delay])

  const clear = useCallback(() => {
    clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    if (autoplay) {
      set()
    }
  })

  const reset = useCallback(() => {
    clear()
    set()
  }, [set, clear])

  return [set, clear, reset]
}
