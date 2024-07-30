const RecipeDetails = ({ingredients}) => {
    const {weight,text}=ingredients;
    return ( 
        <ul>
            <li>{text}</li>
            <li>weight:{weight}</li>
        </ul>
     );
}
 
export default RecipeDetails;