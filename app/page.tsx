import Image from "next/image"
import Link from "next/link"

import HeroWiki from "@/components/HeroWiki"
import { getImageRamdom } from "@/services/wikiServices"
import { imageBreedType, infoBreedType } from "@/types/Page"
import { PLACEHOLDER_IMAGE, WITH_IMAGE_SUMMARY, HEIGHT_IMAGE_SUMMARY } from "@/constants/Page/MainImageBreed"

import style from "./Home.module.css"

export default async function Home() {
  const breedsMostSearched = await getImageRamdom()
  return (
    <>
      <div className={style.sectionHero}>
        <HeroWiki/>
        <section className={`${style.summary} px-7 py-5`}>
          <div className="inner">
            <div className="title title4">
              <span>Most Searched Breeds</span>
              <div className={`${style.lineTitle} ${style.lineTitleBotton}`}></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mt-4 mb-6 sm:mb-10">
              <h2 className="title sm:text-5xl">66+ Breeds For you<br/>to discover</h2>
              <Link href="/most_searched_breeds" className={`${style.link} title4`}>
                See more <span className="material-symbols-rounded s-20">trending_flat</span>
              </Link>
            </div>
            <div className={style.summary__gallery}>
              {breedsMostSearched.slice(0,4).map((breedsInfo: imageBreedType) =>(
                <div key={breedsMostSearched.id}>
                  {breedsInfo.breeds.map((breed: infoBreedType) => (
                    <div key={breed.id}>
                      <div className={`${style.summary__galleryImage} mb-3`}>
                        <Image
                          alt={`Picture of ${breed.name} breed`}
                          placeholder="blur"
                          blurDataURL={PLACEHOLDER_IMAGE}
                          src={breedsInfo.url}
                          className="object-cover"
                          fill
                        />
                      </div>
                      <span className="title title4 f-semibold">{breed.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="pt-16"></div>
      <section className="inner flex flex-col sm:flex-row gap-16 sm:gap-24">
        <div className={`${style.blog__text} sm:w-6/12`}>
          <div className="title title1 mb-12">
            <div className={`${style.lineTitle} ${style.lineTitleTop}`}></div>
            <span>Why should<br className="sm:hidden"/> you have a cat?</span>
          </div>
          <p className="mb-6">Having a cat around you can actually trigger the realise of calming chemicals in your body which lower your stress and anxiety leves</p>
          <Link href="/" className={`${style.link} title4`}>
            Read more <span className="material-symbols-rounded s-20">trending_flat</span>
          </Link>
        </div>
        <div className={`${style.blog__images}`}>
          <div className={style.blogImages__1}>
            <Image
              
              alt="woman's hand touch a cat"
              src="/blog_image_2.png"
              width={172}
              height={105}
            />
          </div>
          <div className={style.blogImages__2}>
            <Image
              className="ml-auto"
              alt="woman's hand touch a cat 2"
              src="/blog_image_1.png"
              width={123}
              height={185}
            />
          </div>
          <div className={style.blogImages__3}>
            <Image
              className="ml-auto"
              alt="a cat in a bag"
              src="/blog_image_3.png"
              width={161}
              height={242}
            />
          </div>
        </div>
      </section>
    </>
  );
}
