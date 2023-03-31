import React, { useState } from 'react';
import axios from 'axios'

function SearchResult({ searchResult }) {

  /* searchResult.data && searchResult.data.map((food) => {console.log(food._id)}) */
  function handleNutrition(event) {
    const foodId = event.target.value
    console.log(foodId)
   // axios.get("http://localhost:4000/foods/"+ value)
  }
  return (
    <div className="searchResult">
      {searchResult.data && (
        <div className="resultBox">
          {
          /* searchResult.data[0].food_name */
          searchResult.data.map((food) => (
            <div key={food._id}>
              <p value={food._id} onClick={event => handleNutrition(event)}>{food.food_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;