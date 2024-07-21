import { useRef, useState } from "react"
import { useEventListener } from "./useEventListener"
import { useUpdateEffect } from "./useUpdateEffect"

export default function useMediaQuery(query){
    const matchQuery = useRef(window.matchMedia(query))
    const [matches, setMatches] = useState(matchQuery.current.matches)
    
    useUpdateEffect(() => {
        matchQuery.current = window.matchMedia(query)
        setMatches(matchQuery.current.matches)
    }, [query])


    useEventListener('change', (e) => setMatches(e.matches), matchQuery.current)

    return matches
}