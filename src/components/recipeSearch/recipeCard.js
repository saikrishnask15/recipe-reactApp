import { useState } from "react";
import RecipeLinesModal from "./RecipeLinesModal";
const RecipeCard = ({ data }) => {
  const { label, image, ingredientLines } = data.recipe;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="recipe-card">
      <img src={image} alt="" />
      <div className="recipe-info">
        {/* <img src={image} alt=""  /> */}
        <div className="recipe-name-cuisine-wrapper">
          <p className="recipe-name">{label}</p>
          <p className="recipe-cuisine">{data.recipe.cuisineType}</p>
        </div>
        <button className="btn" onClick={handleOpenModal}>
          VIEW RECIPE
        </button>
        <RecipeLinesModal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>{label}</h2>
          <h4>Ingredients Lines:</h4>
          <div className="modal-ingredient-ctn">
            {ingredientLines.map((value, key) => (
              <ul key={key}>
                <li>{value}</li>
              </ul>
            ))}
          </div>
        </RecipeLinesModal>
      </div>
    </div>
  );
};

export default RecipeCard;
