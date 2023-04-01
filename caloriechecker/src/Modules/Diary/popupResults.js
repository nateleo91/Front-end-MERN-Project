import React, { useState } from "react";
import axios from "axios";

function PopupResults(props) {
  const searchResult = props.searchResult;

  async function handleAddFood(event) {
    const foodId = event.target.attributes.value.value;
    let foodNutritionObject = await axios.get(
      "http://localhost:4000/foods/" + foodId
    );
    console.log(foodNutritionObject.data);
  }

  return (
    <div className="searchResult">
      {searchResult.data && (
        <div className="resultBox">
          {searchResult.data.map((food) => (
            <div key={food._id}>
              <p value={food._id} onClick={(event) => handleAddFood(event)}>
                {food.food_name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PopupResults;
