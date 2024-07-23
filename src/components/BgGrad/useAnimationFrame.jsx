import { useRef, useEffect, useCallback } from "react";

export const useAnimationFrame = (callback, autoplay = true) => {
    const callbackRef = useRef(callback);
    const animationFrameRef = useRef();

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        animationFrameRef.current = window.requestAnimationFrame(callbackRef.current)
    }, [])

    const clear = useCallback(() => {
        window.cancelAnimationFrame(intervalRef.current)
    }, [])

    useEffect(() => {
        if(autoplay){ set() }
    }, [])

    const reset = useCallback(() => {
        clear()
        set()
    }, [set, clear])

    return [set, clear, reset]
}