import { useEffect, useRef } from "react";

export function useEventListener(eventType, callback, element, defaultToWindows = true){
    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        const handler = e => callbackRef.current(e);
        
        if (element == null || element == undefined) {
            if (defaultToWindows == true){
                window.addEventListener(eventType, handler)
            }
            else{
                return
            }
        }
        else if( element != null ){
            element.addEventListener(eventType, handler)
        }

        return () => {
            if (element) {
                element.removeEventListener(eventType, handler)   
            }
        }
    }, [element])
}