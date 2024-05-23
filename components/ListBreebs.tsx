import Link from "next/link"
import { breedsType } from "@/types/HeroWikiTypes"
//import {getBreeds} from "@/services/wikiServices"

import style from "./ListBreebs.module.css"
interface props {
    items: breedsType[] | undefined,
    floating: boolean
}
const ListBreeds = ({
    items,
    floating = false
}: props) => {
    //const breeds = await getBreeds()
    const variantClass = floating ? style["floating"] : ""
    return(
        <div className={`${style.wrap} ${variantClass}`}>
            <ul className={`${style.list} sm:mx-3 sm:mt-3`}>
                {items?.length === 0 &&
                    <li className="textMuted">
                        <span className="material-symbols-rounded s-48">
                            sentiment_dissatisfied
                        </span>
                        No breeds found
                    </li>
                }
                {items &&
                items.map((breed : breedsType) => (
                    <li key={breed.id} className={`${style.list__item}`}>
                        <Link href={`/breeds/${breed.id}`} className={`${style.list__itemLink} px-3 py-4`}>
                            {breed.name}
                        </Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default ListBreeds