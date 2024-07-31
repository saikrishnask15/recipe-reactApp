import RecipeDetails from "./recipeDetails";

const RecipeCard = ({ data }) => {
  const { label, image, url, ingredients } = data.recipe;
  return (
    <div className="recipe-card">
      <img src={image} alt="" />
      <div className="recipe-info">
      {/* <img src={image} alt=""  /> */}
      <p className="recipe-name">{label}</p>
      <p className="recipe-cuisine">{data.recipe.cuisineType}</p>
      <a className="view-btn" href={url} target="_blank" rel="noreferrer noopener">
        VIEW RECIPE
      </a>
      </div>
     
      {/* {ingredients.map((ingredients,key)=>
        <RecipeDetails ingredients={ingredients} key={key} />)} */}
    </div>
  );
};

export default RecipeCard;
