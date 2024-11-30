import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const params = useParams();
  const { id } = params;
  const [recipeDetails, setRecipeDetails] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=ebb26fa21c714f4ba43c4f8253bd3310`
      );
      const dataJSON = await response.json();
      setRecipeDetails(dataJSON);
    };
    fetchRecipe();
  }, [id]);

  return (
    recipeDetails && (
      <div className="recipe-details">
        <h1>{recipeDetails.title}</h1>
        <img src={recipeDetails.image} alt={recipeDetails.title} />
        <div dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
        <h2>Ingredients:</h2>
        <ul>
          {recipeDetails.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h2>Instructions:</h2>
        <ol>
            {recipeDetails.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
  
        </ol>
      </div>
    )
  );
};

export default RecipeDetails;
