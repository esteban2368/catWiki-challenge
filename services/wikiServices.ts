import { breedsType } from "@/types/HeroWikiTypes"
import { QUERY_PARAMS_MAIN_IMAGE as PARAMS, QUERY_PARAMS_RAMDOM_IMAGES as PARAMS_RAMDOM } from "@/constants/services"
import { error } from "console"

const headers = new Headers()
headers.append('Content-Type', 'application/json')
headers.append('x-api-key', `${process.env.API_CAT_KEY}`)

export const getBreeds = async() => {
    const response = await fetch(
        `${process.env.API_CAT_URL}/breeds`,
        {
            headers: headers
        })
    const result = await response.json()

    return result
}

export const getBreedByID = async (id: string) => {
    const response = await fetch(
        `${process.env.API_CAT_URL}/breeds/${id}`,
        {
            headers: headers
        }
    )
    return response.json()
}

export const getMainImageBreed = async (id: string) => {
    try {
        const response = await fetch(
            `${process.env.API_CAT_URL}/images/${id}`,
            {
                headers: headers
            }
    
        )
        if (!response.ok){
            throw new Error(`No profile image error: ${response.status}`)
        }

        return response.json()

    } catch (error: any) {
        return {error: error.message}
    }
}

export const getImageByBreed = async (id: string) => {
    const response = await fetch(
        `${process.env.API_CAT_URL}/images/search?size=${PARAMS.size}&has_breeds=${PARAMS.has_breeds}&limit=${PARAMS.limit}&include_breeds=${PARAMS.include_breeds}&breed_ids=${id}`,
        {
            headers: headers
        }

    )
    return response.json()
}

export const getImageRamdom = async () => {
    const response = await fetch(
        `${process.env.API_CAT_URL}/images/search?size=${PARAMS_RAMDOM.size}&has_breeds=${PARAMS_RAMDOM.has_breeds}&limit=${PARAMS_RAMDOM.limit}&include_breeds=${PARAMS_RAMDOM.include_breeds}`,
        {
            headers: headers
        }
    )
    return response.json()
}
