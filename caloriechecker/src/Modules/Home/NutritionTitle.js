import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import axios from 'axios';

function NutritionFacts() {

  
  const [value, setValue] = useState(1);
  const [searchResult, setSearchResult] = useState([]);
  let [tempNutritionInfo, setTempNutritionInfo] = useState([{defaultState}])
  /*Temp is needed to be able to multiply nutrition values while retaining
    original values for the temp values to calculate from.
  */
  let [nutritionInfo, setNutritionInfo] = useState([{defaultState}])

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  const handleSearchQuery = async (searchText) => {

    await axios.get("https://calorie-trakr.herokuapp.com/foods/searchFood?food=" + searchText)
    // changed url for deployment
      .then((res) => {
        setSearchResult(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const currentValue = value
    if(currentValue >= 1){
      //Above needed or the nutrition table will zero out if user puts 0 <
      setTempNutritionInfo(() => {
        const multipliedNutritionFacts = {};
        for (const [key, nutritionValue] of Object.entries(nutritionInfo)) {
          multipliedNutritionFacts[key] = nutritionValue * value;
        }
        return multipliedNutritionFacts;
      });
    }
    else {
      setTempNutritionInfo(nutritionInfo)
    }
  }, [nutritionInfo,value])

  return (
    <div id="content">
      <div className="left">
        <SearchBar handleSearchQuery={handleSearchQuery} />
        <SearchResult searchResult={searchResult} setNutritionInfo={setNutritionInfo}/>
      </div>
      
    <div className="right">
    <h2 className="nutritionTitle">Nutrition Facts</h2>
        <label htmlFor="number-input" className="servings">
          Servings:
        </label>
        <input className="nutInput"
          type="number"
          step="0.01"
          id="number-input"
          value={value}
          onChange={handleInputChange}
        />

        <div className="nutritionInfo">
            <table className="nutInfo">
            <tbody>
            <tr>
            <td class="col-1">Calories</td>
            <td class="col-2">{`${tempNutritionInfo.calories || 0}`}</td>
            <td class="col-1">Sodium</td>
            <td class="col-2">{`${tempNutritionInfo.sodium || 0}`}mg</td>
            </tr>
            <tr>
            <td class="col-1">Total Fat</td>
            <td class="col-2">0g</td>
            <td class="col-1">Potassium</td>
            <td class="col-2">{`${tempNutritionInfo.potassium || 0}`}mg</td>
            </tr>
            <tr>
            <td class="col-1 sub">Saturated</td>
            <td class="col-2">{`${tempNutritionInfo.saturated_fat || 0}`}g</td>
            <td class="col-1">Total Carbs</td>
            <td class="col-2">{`${tempNutritionInfo.carbohydrate || 0}`}g</td>
            </tr>
            <tr>
            <td class="col-1">Dietary Fiber</td>
            <td class="col-2">{`${tempNutritionInfo.fiber || 0}`}g</td>
            <td class="col-1">Sugars</td>
            <td class="col-2">{`${tempNutritionInfo.sugar || 0}`}g</td>
            </tr>
            <tr>
            <td class="col-1 sub">Trans</td>
            <td class="col-2">{tempNutritionInfo.trans_fat || 0}g</td>
            <td class="col-1">Protein</td>
            <td class="col-2">{`${tempNutritionInfo.protein || 0}`}g</td>
            </tr>
            <tr class="last">
			      <td class="col-1">Cholesterol</td>
			      <td class="col-2">{`${tempNutritionInfo.cholesterol || 0}`}mg</td>
			      <td class="col-1">&nbsp;</td>
			      <td class="col-2">&nbsp;</td>
		        </tr>
            <br />
            <tr class="alt">
			      <td class="col-1">Vitamin A</td>
			      <td class="col-2">{`${tempNutritionInfo.vitamin_a || 0}`}%</td>
			      <td class="col-1">Calcium</td>
			      <td class="col-2">{`${tempNutritionInfo.calcium || 0}`}mg</td>
		        </tr>
            <tr class="last">
			      <td class="col-1">Vitamin C</td>
			      <td class="col-2">{`${tempNutritionInfo.vitamin_c || 0}`}%</td>
			      <td class="col-1">Iron</td>
			      <td class="col-2">{`${tempNutritionInfo.iron || 0}`}%</td>
		        </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  );
}

const defaultState = {
  calcium: 0,
  calories: 0,
  carbohydrate: 0,
  fat: 0,
  fiber: 0,
  sugar:0,
  food_name: "",
  food_type: "",
  iron: 0,
  potassium: 0,
  protein: 0,
  saturated_fat: 0,
  serving_description: "",
  serving_measure: "",
  serving_size: 0,
  sodium: 0,
  trans_fat: 0,
  cholesterol: 0,
  vitamin_a: 0,
  vitamin_c: 0,
}

export default NutritionFacts;
