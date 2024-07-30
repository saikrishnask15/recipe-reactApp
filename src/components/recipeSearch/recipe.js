import { useContext } from "react";

import { RecipeContext } from "../../App";
import RecipeCard from "./recipeCard";

const Recipe = () => {
    const { response } = useContext(RecipeContext);

    console.log(response);
    if (Array.isArray(response)) {
        return (
          <div>
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