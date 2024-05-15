import style from "./SearchBar.module.css"

interface SearchBarTypes {
    typeBar: string,
    children: React.ReactNode;
    query: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({
    typeBar = "mobile",
    children, 
    query,
    onChange
}: SearchBarTypes)=>{
    return(
        <div className={`${style.wrap} py-2.5 px-5`}>
            <input 
                value={query}
                onChange={onChange}
                type="text" 
                name="searchBreed" 
                placeholder="Enter your breed"
                className={style.input}
            />
            <span className="material-symbols-rounded s-24">search</span>
        </div>
    )
}

export default SearchBar