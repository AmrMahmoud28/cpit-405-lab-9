import React, { useState } from "react";
import RecipesResults from "./RecipesResults";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const handleSubmit = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=ebb26fa21c714f4ba43c4f8253bd3310&query=${searchQuery}`
    );
    const dataJSON = await response.json();
    setSearchResults(dataJSON.results);
  };

  return (
    <>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search by ingredients..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
      {searchResults && <RecipesResults recipes={searchResults}/>}
    </>
  );
};

export default Search;
