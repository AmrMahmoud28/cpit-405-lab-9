import React from "react";
import { Link } from "react-router-dom";

const RecipesResults = ({ recipes }) => {
  return (
    recipes && (
      <div className="recipe-container">
        {recipes.map((item) => {
          return (
            <div className="recipe-card" key={item.id}>
              <Link to={`cpit-405-lab-9/recipe-details/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    )
  );
};

export default RecipesResults;
