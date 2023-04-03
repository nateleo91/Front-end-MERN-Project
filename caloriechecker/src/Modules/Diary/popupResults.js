import React from 'react';
import axios from 'axios';

function PopupResults(props) {
  const { searchResult, addFoodToMeal } = props;

  async function handleAddFood(event) {
    const foodId = event.target.attributes.value.value;
    await addFoodToMeal(foodId);
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
