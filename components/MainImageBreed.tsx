import Image from "next/image"
import { getMainImageBreed } from "@/services/wikiServices"
import { PLACEHOLDER_IMAGE } from "@/constants/Page/MainImageBreed"

import style from "./MainImageBreed.module.css"

interface props{
    imageID: string
}

const MainImageBreed = async ({imageID}: props) => {
    const mainImage = await getMainImageBreed(imageID) 
    return (
        <div className={style.wrap}>
            {!mainImage.error ?
                <>
                    <div className={style.line}></div>
                    <div className={style.wrap__image}>
                        <Image
                            className={style.image}
                            alt="Reference image breed"
                            src={mainImage.url}
                            placeholder="blur"
                            blurDataURL={PLACEHOLDER_IMAGE}
                            width={370}
                            height={370}
                        />
                    </div>
                </>:(
                    <div className="textMuted h-full">
                        <span className="material-symbols-rounded s-48">
                            sentiment_dissatisfied
                        </span>
                        {mainImage.error}
                    </div>
                )
            }
        </div>
    )
}

export default MainImageBreed