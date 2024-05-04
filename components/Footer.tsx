import { LINKS } from "@/constants/Footer"
import Link from "next/link"
import Image from "next/image"

import style from "./Footer.module.css"

const Footer = ()=>{
    return(
        <footer className={`${style.container} flex flex-col gap-3.5 pl-7 py-8`}>
            <Link href={"/"}>
                <Image
                    alt="Logo CatWiki"
                    src="/catwiki_logo.svg"
                    width={71}
                    height={20}
                />
            </Link>
            <div className="flex items-center gap-1">
                <span className={style.icon}>©</span> created by
                <ul className="flex ">
                    {LINKS.map(link =>
                        <li key={link.id}>
                            <a href={link.href} className={style.link} target="_blank">{link.text}</a>
                        </li>
                    )} 
                </ul>
                - devChallenge.io 2024
            </div>
        </footer>
    )
}

export default Footer