import { breedsType } from "./HeroWikiTypes";

export interface props {
    isOpenModal: boolean;
    setIsOpenModal: (isOpenModal:boolean) => void;
    dataToShow: breedsType[] | undefined
}