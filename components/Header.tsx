import Link from "next/link"
import Image from "next/image"

import { LOGO_SIZE } from "@/constants/Header"

const Header = ()=>{
    return(
        <header className="pt-3">
            <Link href={"/"}>
                <Image
                    alt="Cat wiki logo"
                    src="./catwiki_logo.svg"
                    width={LOGO_SIZE.mobile.width}
                    height={LOGO_SIZE.desktop.height}
                />
            </Link>
        </header>
    )
}

export default Header