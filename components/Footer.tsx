import { LINKS, LOGO_SIZE } from "@/constants/Footer"
import Link from "next/link"
import Image from "next/image"

import style from "./Footer.module.css"

const Footer = ()=>{
    return(
        <footer className={`${style.container} flex flex-col gap-4 pl-7 pr-2 py-8`}>
            <Link href={"/"} className={style.logo}>
                Catwiki
                <Image
                    alt="silhouette icon cat"
                    src="/icon_cat.svg"
                    width={LOGO_SIZE.mobile.width}
                    height={LOGO_SIZE.mobile.height}
                />
            </Link>
            <div className="flex items-center gap-1">
                <span className={style.icon}>©</span>
                <span>
                    created by&nbsp;
                    {LINKS.map(link =>
                        <a key={link.id} href={link.href} className={style.link} target="_blank">{link.text}</a>
                    )} 
                    &nbsp;- devChallenge.io 2024
                </span>
            </div>
        </footer>
    )
}

export default Footer