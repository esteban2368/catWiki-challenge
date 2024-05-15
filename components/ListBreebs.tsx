import Link from "next/link"
import { breedsType } from "@/types/HeroWikiTypes"
//import {getBreeds} from "@/services/wikiServices"

import style from "./ListBreebs.module.css"
interface props {
    items: breedsType[] | undefined
}
const ListBreeds = ({items}: props) => {
    //const breeds = await getBreeds()
    return(
        <div className={style.wrap}>
            <ul className={style.list}>
                {items?.length === 0 &&
                    <li className={style.list__muted}>
                        <span className="material-symbols-rounded s-48">
                            sentiment_dissatisfied
                        </span>
                        No breeds found
                    </li>
                }
                {items &&
                items.map((breed : breedsType) => (
                    <li key={breed.id} className={`${style.list__item}`}>
                        <Link href="/breeds" className={`${style.list__itemLink} px-3 py-4`}>
                            {breed.name}
                        </Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default ListBreeds