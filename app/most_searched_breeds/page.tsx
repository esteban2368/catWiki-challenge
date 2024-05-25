import Image from "next/image"
import Link from "next/link"
import { getImageRamdom } from "@/services/wikiServices"
import { imageBreedType, infoBreedType } from "@/types/Page"
import { PLACEHOLDER_IMAGE, WITH_IMAGE, HEIGHT_IMAGE } from "@/constants/Page/MainImageBreed"

import style from "./page.module.css"

const Page = async () => {
    const ramdomImages = await getImageRamdom()
    return (
        <>  
            <Link href="/" className="z-10">
                    <span className="material-symbols-outlined s-40">
                        arrow_back
                    </span>
            </Link>
            <h2 className="title title2 mb-12">Top 10 most searched breeds</h2>
            <div className={style.wrap}>
                {ramdomImages.map((imageBreed : imageBreedType, index: number) =>(
                    <div className={style.infoBreed}
                    key={ramdomImages.id}>
                        <div className="shrink-0">
                            <Image
                                className={style.infoBreed__image}
                                placeholder="blur"
                                blurDataURL={PLACEHOLDER_IMAGE}
                                alt="Image breed"
                                src={imageBreed.url}
                                width={WITH_IMAGE}
                                height={HEIGHT_IMAGE}
                            />
                        </div>
                        {imageBreed.breeds.map((info: infoBreedType)=> (
                            <div key={info.id} className="text-center sm:text-left">
                                <span className="title title2 block font-semibold mb-6">{`${index + 1}. ${info.name}`}</span> 
                                <p>{info.description}</p>
                            </div>
                        ))}
                        <p></p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Page