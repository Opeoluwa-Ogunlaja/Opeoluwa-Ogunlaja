import { useCallback, useEffect, useRef } from 'react'
import { useEventListener } from './useEventListener'

export function useSwipeGeneral(element, callback, options) {
  let callbackRef = useRef(callback),
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = options?.minDistance ? options.minDistance : 150,
    restraint = options?.restraint ? options.restraint : 100,
    allowedTime = options?.allowedTime ? options.allowedTime : 300,
    elapsedTime,
    startTime

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const startEvent = useCallback(e => {
    var touchobj = { pageX: e.pageX, pageY: e.pageY }
    swipedir = 'none'
    distX = 0
    distY = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime()
  })

  const moveEvent = useCallback(e => {
    e.preventDefault()
  })

  const endEvent = useCallback(e => {
    var touchobj = { pageX: e.pageX, pageY: e.pageY }
    distX = touchobj.pageX - startX
    distY = touchobj.pageY - startY
    elapsedTime = new Date().getTime() - startTime
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        swipedir = distX < 0 ? 'left' : 'right'
      } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
        swipedir = distY < 0 ? 'up' : 'down'
      }
    }
    if (swipedir == 'none' || !swipedir) return
    callbackRef.current(swipedir)
  })

  useEventListener('pointerdown', startEvent, element)
  useEventListener('pointermove', moveEvent, element)
  useEventListener('pointerup', endEvent, element)
}
