import React, { useEffect, useRef } from "react"

const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() =>{
        const handleClick = (e: MouseEvent ) => {
            const target = e.target as HTMLElement
            if(ref.current && !ref.current.contains(target))
                callback()
        }
        document.addEventListener("click", handleClick )
        return () => {
            document.removeEventListener("click", handleClick)
        }
    },[ref])

    return ref
}

export default useOutsideClick