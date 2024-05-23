import Image from "next/image"
import { getImageRamdom } from "@/services/wikiServices"
import { breedsType, apiBreedsResponse } from "@/types/HeroWikiTypes"

const Page = async () => {
    const ramdomImages = await getImageRamdom()
    return (
        <>
            {ramdomImages.map((imageBreed : breedsType) => {
                return <div>
                            <Image
                            alt="Image breed"
                            src={imageBreed.url}
                            width={imageBreed.width}
                            height={imageBreed.height}
                            />
                        </div>
            })}
        </>
    )
}

export default Page