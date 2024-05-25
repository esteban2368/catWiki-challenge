"use client"
import { useState, Suspense } from "react"
import Image from "next/image"
import Modal from "@/components/Modal"
import SearchBar from "./SearchBar"
import ListBreeds from "./ListBreebs"
import useDataBreeds from "@/hooks/useDataBreeds"
import useOutsideClick from "@/hooks/useOutsideClick"
import filterItems from "@/utils/filterItems"

import style from "../app/Home.module.css"

interface props{
    modal: React.ReactNode
}

const HeroWiki = () => {
    const [dataBreeds] = useDataBreeds(`${process.env.URL_ROUTE_CAT}`)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [query, setQuery] = useState('')
    const [focusSearch, setFocusSearch] = useState(false)
    
    const items = filterItems(dataBreeds, query)
    
    const handleOpenModal = () => {
        setIsOpenModal(!isOpenModal)
    }
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    const handleOutsideClick = () => {
        setFocusSearch(false)
    }

    const outsideClick = useOutsideClick(handleOutsideClick)
    return(
        <>  
            <section className={`${style.hero}`}>
                <div className={`${style.hero__wrap} inner flex flex-col sm:justify-center gap-4 sm:gap-12 px-7 sm:px-0 pt-5 pb-6`}>
                <div>
                    <h2 className={style.hero__title}>
                        Catwiki 
                        <Image 
                            className="hidden sm:block"
                            alt="cat's silhouette" 
                            src="/icon_cat.svg"
                            width={80}
                            height={65}
                        />    
                    </h2>
                    <p className={style.hero__text}>Get to know more about<br className="sm:hidden"/> your cat breed</p>
                </div>
                <button className={`${style.hero__search} title4`} onClick={handleOpenModal}>
                    Search <span className="material-symbols-rounded s-20">search</span> 
                </button>
                {/** Only show version desktop */}
                <div className={style.wrapSearch}>
                    <SearchBar 
                        typeBar="mobile" 
                        query={query} 
                        onChange={handleChangeInput} 
                        onFocus={() => setFocusSearch(true)}
                        ref={outsideClick}
                    >
                        Enter
                    </SearchBar>
                    {focusSearch &&
                        <Suspense fallback={
                            <div className="">
                                <span className="Loading__spinner material-symbols-outlined s-40">
                                    progress_activity
                                </span>
                                <p>Loading...</p>
                            </div>
                        }>
                            <ListBreeds floating items={items}/>
                        </Suspense>
                    }
                </div>
                </div>
                <div className={style.hero__containerBg}>
                <Image
                    alt="a cat breed"
                    src="/HeroImagelg.png"
                    fill
                    priority
                    className="object-cover"
                />
                </div>
            </section>
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} dataToShow={dataBreeds}/>
        </>
    )
}
export default HeroWiki