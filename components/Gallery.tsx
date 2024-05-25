"use client"
import { Suspense, useState } from "react"
import Image from "next/image"
import { PLACEHOLDER_IMAGE } from "@/constants/Page/MainImageBreed"
import { imageBreedType } from "@/types/Page"

import style from "./Gallery.module.css"

interface props{
    images: imageBreedType[]    
}

const Gallery = ({images}: props) => {
    const [currentImage, setCurrentImage] = useState(0)

    const handleNavegationNextClick = () => {
        setCurrentImage(currentImage + 1)
    }
    const handleNavegationBackClick = () => {
        setCurrentImage(currentImage - 1)
    }

    let imageBreed = images[currentImage] ?? null
    return (
        <div className={style.wrap}>
            <button 
                className={`${style.button} ${style.buttonBack}`} 
                onClick={handleNavegationBackClick}
                disabled={currentImage == 0}
                >
                <span className="material-symbols-outlined s-40">
                    chevron_left
                </span>
            </button>
            <button 
                className={`${style.button} ${style.buttonNext}`} 
                onClick={handleNavegationNextClick}
                disabled={currentImage >= images.length - 1}
            >
                <span className="material-symbols-outlined s-40">
                    chevron_right
                </span>
            </button>
            <div>
                {imageBreed ? 
                    <Suspense fallback={<p>Loading ...</p>}>
                        <Image
                            alt="Gallery image"
                            key={imageBreed.id}
                            src={imageBreed.url}
                            placeholder="blur"
                            blurDataURL={PLACEHOLDER_IMAGE}
                            width={340}
                            height={340}
                        />
                    </Suspense>
                : (
                    <p>No image available</p>
                )}
            </div>
        </div>
    )
}

export default Gallery