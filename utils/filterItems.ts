import { breedsType } from "@/types/HeroWikiTypes"

export const filterItems = (
    listBreeds: breedsType[] | undefined, query: string) : breedsType[] | undefined => {
        query = query.toLowerCase()
        return listBreeds &&
        listBreeds.filter((breed: breedsType) => {
            return breed.name.split(' ').some(word => 
                word.toLowerCase().startsWith(query)
            )
    })
}

export default filterItems