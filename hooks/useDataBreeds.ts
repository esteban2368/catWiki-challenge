"use client"
import { useEffect, useState } from "react"
import { breedsType, apiBreedsResponse } from "@/types/HeroWikiTypes"

const useDataBreeds = (url:string) => {
    const [dataBreeds, setDataBreeds] = useState<breedsType[]>()

    useEffect(()=>{
        let ignore = false
        fetch(url)
        .then(response => response.json())
        .then((json:apiBreedsResponse) => {
            if(!ignore){
                setDataBreeds(json.result)
            }
        })
        return () => {
            ignore = true
        }
    }, [url])

    return [dataBreeds]
}
export default useDataBreeds