import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Create.css'

function NutritionInput() {
	const [nutritionInputs, setNutritionInputs] = useState({
		food_name: '',
		calories: '',
		Fat: '',
		saturatedFat: '',
		polyunsaturatedFat: '',
		monounsaturatedFat: '',
		transFat: '',
		cholesterol: '',
		sodium: '',
		carbohydrate: '',
		fiber: '',
		sugar: '',
		protein: ''
	  });
	
	  const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNutritionInputs((prev) => ({
		  ...prev,
		  [name]: value,
		}));
		console.log(nutritionInputs)
	  };
	  
	  const handleSubmit = async (event) => {
		event.preventDefault();
		await axios.post("http://localhost:4000/foods/addFood", nutritionInputs)
		.then((res) => {
			console.log(res)
		})
	  };
	  
	  const { food_name, calories, totalFat, saturatedFat, polyunsaturatedFat, monounsaturatedFat, transFat, cholesterol, sodium, carbohydrate, fiber, sugar, protein } = nutritionInputs;	
	
	  return(
		<div className="Create">
		<h2>Enter Nutritional Information</h2>

		<form className="createForm" onSubmit={handleSubmit}>
    <label htmlFor="name-input">Food name:</label>
    <input type="text" id="name-input" name="food_name" value={food_name} onChange={handleInputChange} />
	<label htmlFor="calories-input">Calories:</label>
<input type="number" className="numInput" id="calories-input" name="calories" value={calories} onChange={handleInputChange} step="1" />
<label id="createLabel" htmlFor="total-fat-input">Total Fat:</label>
<input type="number" className="numInput" id="total-fat-input" name="totalFat" value={totalFat} onChange={handleInputChange} step="1" />
<label id="createLabel" htmlFor="saturated-input">Saturated Fat:</label>
<input type="number" className="numInput" id="saturated-input" name="saturatedFat" value={saturatedFat} onChange={handleInputChange} step="1" />
<label id="createLabel" htmlFor="polyunsaturated-input">Polyunsaturated Fat:</label>
<input type="number" className="numInput" id="polyunsaturated-input" name="polyunsaturatedFat" value={polyunsaturatedFat} onChange={handleInputChange} step="1" />
<label id="createLabel" htmlFor="monounsaturated-input">Monounsaturated Fat:</label>
<input type="number" className="numInput" id="monounsaturated-input" name="monounsaturatedFat" value={monounsaturatedFat} onChange={handleInputChange} step="1" />
<label id="createLabel" htmlFor="trans-input">Trans Fat:</label>
<input type="number" className="numInput" id="trans-input" name="transFat" value={transFat} onChange={handleInputChange} step="1" />
<label id="createLabel" htmlFor="cholesterol-input">Cholesterol:</label>
<input type="number" className="numInput" id="cholesterol-input" name="cholesterol" value={cholesterol} onChange={handleInputChange} step="1" />
<label id="createLabel" htmlFor="sodium-input">Sodium:</label>
<input type="number" className="numInput" id="sodium-input" name="sodium" value={sodium} onChange={handleInputChange} step="1" />
<label id="createLabel" htmlFor="total-carbs-input">Total Carbohydrates:</label>
<input type="number" className="numInput" id="total-carbs-input" name="carbohydrate" value={carbohydrate} onChange={handleInputChange} step="1" />
<label id="createLabel" htmlFor="dietary-fiber-input">Dietary Fiber:</label>
<input type="number" className="numInput" id="dietary-fiber-input" name="fiber" value={fiber} onChange={handleInputChange} step="1" />
<label id="createLabel" htmlFor="sugars-input">Sugars:</label>
<input type="number" className="numInput" id="sugars-input" name="sugar" value={sugar} onChange={handleInputChange} step="1" />
<label id="createLabel" htmlFor="protein-input">Protein:</label>
<input type="number" className="numInput" id="protein-input" name="protein" value={protein} onChange={handleInputChange} step="1" />
<button className="submit" type="submit">Submit</button>
  </form>
	  </div>
	)
}

export default NutritionInput