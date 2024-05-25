import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import Rating from "@/components/Rating"
import MainImageBreed from "@/components/MainImageBreed"
import Gallery from "@/components/Gallery"

import { getBreeds, getBreedByID, getImageByBreed} from "@/services/wikiServices"
import { breedsType } from "@/types/HeroWikiTypes"
import { imageBreedType } from "@/types/Page"
import { PLACEHOLDER_IMAGE } from "@/constants/Page/MainImageBreed"

import style from "./page.module.css"

interface paramsType{
    id: string
}

export async function generateStaticParams(){
    const breeds =  await getBreeds()

    return breeds.map((breed : breedsType) => ({
        id: breed.id
    }))
}

const Page = async ({
    params
} : {
    params: paramsType
}) => {
    const { id } = params
    const breeds = getBreedByID(id)
    const imagesBreed = getImageByBreed(id)

    const [breedData, images] = await Promise.all([breeds, imagesBreed])

    return (
        <section className={style.wrap}>
            <section className="flex items-center text-center gap-4 relative">
                <Link href="/" className="z-10">
                    <span className="material-symbols-outlined s-40">
                        arrow_back
                    </span>
                </Link>
                <h1 className="title title-3 textCenter">Profile Breed</h1>    
            </section>
            <section className={`${style.feactures} flex flex-col sm:flex-row sm:items-start gap-4`}>
                <Suspense fallback={
                    <div className="Loading">
                        <span className="Loading__spinner material-symbols-outlined s-40">
                            progress_activity
                        </span>
                        <p>Loading...</p>
                    </div>
                }>
                <MainImageBreed imageID={breedData.reference_image_id}/>
                </Suspense>
                <div className={`${style.feacturesWrap} sm:ml-auto`}>
                    <h2 className="title title2 text-center sm:text-left">{breedData.name}</h2>
                    <p className="text-center sm:text-left">{breedData.description}</p>
                    <div>
                        <ul className={style.feacturesList}>
                            <li className={`${style.feacturesList__item} justify-between sm:justify-start gap-3`}>
                                <span className="font-bold">Temperament: </span>
                                <span className="w-6/12 sm:w-auto text-right">{breedData.temperament}</span>
                            </li>
                            <li className={`${style.feacturesList__item} justify-between sm:justify-start gap-3 gap-3`}>
                                <span className="font-bold">Origin: </span>
                                <span>{breedData.origin}</span>
                            </li>
                            <li className={`${style.feacturesList__item} justify-between sm:justify-start gap-3 gap-3`}>
                                <span className="font-bold">Life Span: </span>
                                <span>{breedData.life_span} years   </span>
                            </li>
                            <li className={`${style.feacturesList__item} gap-3`}>
                                <span className={`${style.feactureList__label} font-bold`}>Adaptability: </span>
                                <Rating scale={5} stars={breedData.adaptability}/>  
                            </li>
                            <li className={`${style.feacturesList__item} gap-3`}>
                                <span className={`${style.feactureList__label} font-bold`}>Affection Level: </span>
                                <Rating scale={5} stars={breedData.affection_level}/>  
                            </li>
                            <li className={`${style.feacturesList__item} gap-3`}>
                                <span className={`${style.feactureList__label} font-bold`}>Child Friendly: </span>
                                <Rating scale={5} stars={breedData.child_friendly}/>  
                            </li>
                            <li className={`${style.feacturesList__item} gap-3`}>
                                <span className={`${style.feactureList__label} font-bold`}>Grooming: </span>
                                <Rating scale={5} stars={breedData.grooming}/>  
                            </li>
                            <li className={`${style.feacturesList__item} gap-3`}>
                                <span className={`${style.feactureList__label} font-bold`}>Intelligence: </span>
                                <Rating scale={5} stars={breedData.intelligence}/>  
                            </li>
                            <li className={`${style.feacturesList__item} gap-3`}>
                                <span className={`${style.feactureList__label} font-bold`}>Health issues: </span>
                                <Rating scale={5} stars={breedData.health_issues}/>  
                            </li>
                            <li className={`${style.feacturesList__item} gap-3`}>
                                <span className={`${style.feactureList__label} font-bold`}>Social needs: </span>
                                <Rating scale={5} stars={breedData.social_needs}/>  
                            </li>
                            <li className={`${style.feacturesList__item} gap-3`}>
                                <span className={`${style.feactureList__label} font-bold`}>Stranger friendly: </span>
                                <Rating scale={5} stars={breedData.stranger_friendly}/>  
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div>
                <h3 className="title title2 text-center sm:text-left mb-10">Other photos</h3>
                <div className="sm:hidden">
                    <Gallery images={images}/>
                </div>
                <div className={`${style.gallery} hidden sm:block`}>
                    <Suspense fallback={<p>Loading .....</p>}>
                        {images ?
                            images.map((image: imageBreedType) => {
                                return <div key={image.id} className={style.gallery__wrapImage}>
                                            <Image
                                                alt="Image Gallery"
                                                placeholder="blur"
                                                blurDataURL={PLACEHOLDER_IMAGE}
                                                src={image.url}
                                                fill
                                                className="object-cover obejct-center"
                                            />
                                        </div>
                            }):(
                                <p>No image found</p>
                            )}
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default Page