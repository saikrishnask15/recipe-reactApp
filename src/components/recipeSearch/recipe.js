import { useContext } from "react";

import { RecipeContext } from "../../App";
import RecipeCard from "./recipeCard";
import '../../styles/recipe.css'

const Recipe = () => {
    const { response } = useContext(RecipeContext);

    console.log(response);
    if (Array.isArray(response)) {
        return (
          <div className="recipe-ctn">
            {response.map((data, key) => (
              <RecipeCard data={data} key={key} />
            ))}
           
          </div>
        );
      } else {
        return <div>Response is not an array</div>;
      }
    };

 
export default Recipe;