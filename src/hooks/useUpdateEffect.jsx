import { useRef } from "react";
import { useEffect } from "react";

export function useUpdateEffect(callback, depenndencies){
    const renderedBefore = useRef(false);

    useEffect(() => {
        if (!renderedBefore.current) {
            renderedBefore.current = true
            return
        }
        callback()
    }, [...depenndencies])
}