import { useContext, useState } from "react";
import { RecipeContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [searchValue, setSearchValue] = useState();
  const { fetchData } = useContext(RecipeContext);
  const YOUR_APP_ID = "945fddb8";
  const YOUR_APP_KEY = "e48f710289a4eeb41d70cce83e5c8c6b";
  const handleChnage = (e) => {
    setSearchValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
      );
      setSearchValue("");
    }
  };
  const handleSearch=(e)=>{
    fetchData(
        `https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
      );
      setSearchValue('');
  }
  
  const clickPreviousItem=(item)=>{
    fetchData(
      `https://api.edamam.com/search?q=${item}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    );
  }
  const searchItems = [
    "pizza",
    "Burger",
    "Biryani",
    "pulav",
    "chicken",
    "mutton",
    "noodles",
    "french fries",
    "ramen"
  ];
  return (
    <div className="section recipe-search-ctn">
      <div className="previous-search">
        <h2>Previous Searches</h2>
        <div className="previous-search-ctn">
            {searchItems.map((item,key)=>
            <div className="previous-search-items" key={key} style={{animationDelay: key * .1 + 's'}} onClick={()=>clickPreviousItem(item)}>{item}</div>)}
        </div>
      </div>

      <div className="search-btn">
        <input
          type="text"
          placeholder="Enter to search..."
          value={searchValue}
          onChange={handleChnage}
          onKeyDown={handleKeyDown}
        />
        <button className="btn" onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch}/>
        </button>
       
      </div>
    </div>
  );
};

export default Search;
