import { ForwardedRef, forwardRef } from "react";
import style from "./SearchBar.module.css"

interface SearchBarTypes {
    typeBar: string,
    children: React.ReactNode;
    query: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
}

const SearchBar = ({
    typeBar = "mobile",
    children, 
    query,
    onChange,
    onFocus
}:SearchBarTypes, 
ref: ForwardedRef<HTMLInputElement>)=>{
    return(
        <div className={`${style.wrap} py-2.5 sm:py-5 px-5 sm:px-7`}>
            <input 
                value={query}
                onChange={onChange}
                onFocus={onFocus}
                type="text" 
                name="searchBreed" 
                placeholder="Enter your breed"
                className={style.input}
                ref={ref}
            />
            <span className="material-symbols-rounded s-24">search</span>
        </div>
    )
}

export default forwardRef(SearchBar)