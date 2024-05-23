import React, { useState, Suspense } from "react"
import SearchBar from "./SearchBar"
import ListBreeds from "./ListBreebs"
import { props } from "@/types/ModalTypes"
import filterItems from "@/utils/filterItems"

import style from "./Modal.module.css"

const Modal = ({isOpenModal, setIsOpenModal, dataToShow = undefined} : props ) => {
    const [query, setQuery] = useState('')
    if(!isOpenModal) return

    const items = filterItems(dataToShow, query)
    
    const handleCloseModal = () => {
        setIsOpenModal(false)
    }
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    return(
        <div className={style.overlay}>
            <div className={`${style.wrap} px-5 py-2`}>
                <button onClick={handleCloseModal} className={style.closeButton} title="close modal">
                    <span className="material-symbols-rounded">
                        close
                    </span>
                </button>
                <div className={style.content}>
                    <div className="flex flex-col gap-4">
                        <SearchBar typeBar="mobile" query={query} onChange={handleChangeInput} >
                            Enter
                        </SearchBar>
                        <Suspense fallback={
                            <div className="">
                                <span className="Loading__spinner material-symbols-outlined s-40">
                                    progress_activity
                                </span>
                                <p>Loading...</p>
                            </div>
                        }>
                            <ListBreeds items={items}/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal