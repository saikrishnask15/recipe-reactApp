import RecipeDetails from "./recipeDetails";

const RecipeCard = ({data}) => {
    const {label,image,url,ingredients}=data.recipe;
    return (
        <div>
        <img src={image} alt=""/>
        <p>cuisine: {data.recipe.cuisineType}</p>
        <a href={url} target="_blank" rel='noreferrer noopener' >link</a>
        <p>{label}</p>
         {ingredients.map((ingredients,key)=>
        <RecipeDetails ingredients={ingredients} key={key} />)}
        </div>
    );
}
 
export default RecipeCard;  