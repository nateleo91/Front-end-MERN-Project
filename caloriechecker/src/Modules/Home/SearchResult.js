import React, { useState } from 'react';
import axios from 'axios'

function SearchResult(props) {

  let setNutritionInfo = props.setNutritionInfo
  const searchResult = props.searchResult


  function convertIntObj(obj) {
    for( const key in obj) {
      if(typeof obj[key] === 'string') {
        obj[key] = parseInt(obj[key])
      }
    }
    return obj
  }
 
  async function handleNutrition(event) {

    const foodId = event.target.attributes.value.value
    let foodNutritionObject =  await axios.get( "https://calorie-trakr.herokuapp.com/foods/" + foodId )
    //changed url for deployment original is http://localhost:4000/ 
    convertIntObj(foodNutritionObject.data)
    setNutritionInfo(foodNutritionObject.data)
  }
  
  return (
    <div className="searchResult">
      {searchResult.data && (
        <div className="resultBox">
          {
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