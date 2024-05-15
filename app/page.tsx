import Image from "next/image";
import Link from "next/link";

import HeroWiki from "@/components/HeroWiki";
import style from "./Home.module.css"

export default function Home() {
  return (
    <>
      <HeroWiki/>
      <section className={`${style.summary} px-7 py-5`}>
        <div className="title title4">
          <span>Most Searched Breeds</span>
          <div className={`${style.lineTitle} ${style.lineTitleBotton}`}></div>
        </div>
        <h2 className="title title3 mt-4 mb-6">66+ Breeds For you<br/>to discover</h2>
      </section>
      <div className="pt-16"></div>
      <section className="flex flex-col gap-16">
        <div className={style.blog__text}>
          <div className="title title1 mb-12">
            <div className={`${style.lineTitle} ${style.lineTitleTop}`}></div>
            <span>Why should<br /> you have a cat?</span>
          </div>
          <p className="mb-6">Having a cat around you can actually trigger the realise of calming chemicals in your body which lower your stress and anxiety leves</p>
          <Link href="/" className={`${style.link} title4`}>
            Read more <span className="material-symbols-rounded s-20">trending_flat</span>
          </Link>
        </div>
        <div className={style.blog__images}>
          <div className={style.blogImages__1}>
            <Image
              
              alt="woman's hand touch a cat"
              src="/blog_image_2.png"
              fill
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
