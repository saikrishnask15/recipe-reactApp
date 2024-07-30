import { useContext, useState } from "react";
import { RecipeContext } from "../../App";

const Search = () => {
    const [searchValue, setSearchValue]= useState();
    const {fetchData} = useContext(RecipeContext);
    const YOUR_APP_ID = "945fddb8";
const YOUR_APP_KEY = "e48f710289a4eeb41d70cce83e5c8c6b";
    const handleChnage=(e)=>{
        setSearchValue(e.target.value);
    }
    const handleKeyDown=(e)=>{
            if(e.key === 'Enter'){
                fetchData(`https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
                setSearchValue('');
            }
    }
    return ( 
        <div>
            <input
            type="text"
            placeholder="enter to serach..."
            value={searchValue}
            onChange={handleChnage}
            onKeyDown={handleKeyDown}
             />
        </div>
     );
}
 
export default Search;