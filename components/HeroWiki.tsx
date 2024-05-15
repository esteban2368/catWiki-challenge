"use client"
import { useState } from "react"
import Image from "next/image"
import Modal from "@/components/Modal"
import SearchBar from "./SearchBar"
import ListBreeds from "./ListBreebs"
import useDataBreeds from "@/hooks/useDataBreeds"

import style from "../app/Home.module.css"

interface props{
    modal: React.ReactNode
}

const HeroWiki = () => {
    const [dataBreeds] = useDataBreeds("http://localhost:3000/api")
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpenModal = () => {
        setIsOpenModal(!isOpenModal)
    }
    return(
        <>
            <section className={`${style.hero}`}>
                <div className={`${style.hero__wrap} flex flex-col gap-4 px-7 pt-5 pb-6`}>
                <div>
                    <h2 className={style.hero__title}>Catwiki</h2>
                    <p className={style.hero__text}>Get to know more about<br/> your cat breed</p>
                </div>
                <button className={`${style.hero__search} title4`} onClick={handleOpenModal}>
                    Search <span className="material-symbols-rounded s-20">search</span> 
                </button>
                </div>
                <div className={style.hero__containerBg}>
                <Image
                    alt="a cat breed"
                    src="/HeroImagelg.png"
                    fill
                    className="object-cover"
                />
                </div>
            </section>
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} dataToShow={dataBreeds}/>
        </>
    )
}
export default HeroWiki