import style from './Rating.module.css'

interface props{
    stars: number,
    scale: number
}

const Rating =({stars, scale}: props) => {
    const styleClass = style["stars"]
    const startsElements = Array.from(
        {length: scale},
        (_, index) => 
            <span key={index} className={`${style.scaleItem} ${index + 1 <= stars ? styleClass : ""}`}></span>
    )
    return <div className={style.wrap}>{startsElements}</div>
}

export default Rating