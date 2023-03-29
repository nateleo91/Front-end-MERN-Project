import React, { useState } from 'react';
import '../../css/Create.css'

function NutritionInput() {
	const [nutritionInputs, setNutritionInputs] = useState({
		name: '',
		calories: '',
		totalFat: '',
		saturatedFat: '',
		polyunsaturatedFat: '',
		monounsaturatedFat: '',
		transFat: '',
		cholesterol: '',
		sodium: '',
		totalCarbs: '',
		dietaryFiber: '',
		sugars: '',
		protein: ''
	  });
	
	  const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNutritionInputs((prev) => ({
		  ...prev,
		  [name]: value,
		}));
	  };
	  
	  const handleSubmit = (event) => {
		event.preventDefault();
		// TODO: Handle form submission
	  };
	  
	  const { name, calories, totalFat, saturatedFat, polyunsaturatedFat, monounsaturatedFat, transFat, cholesterol, sodium, totalCarbs, dietaryFiber, sugars, protein } = nutritionInputs;	
	
	  return(
		<div className="Create">
		<h2>Enter Nutritional Information</h2>

		<form onSubmit={handleSubmit}>
    <label htmlFor="name-input">Name:</label>
    <input type="text" id="name-input" name="name" value={name} onChange={handleInputChange} />
	<label htmlFor="calories-input">Calories:</label>
<input type="number" id="calories-input" name="calories" value={calories} onChange={handleInputChange} step="1" />
<label htmlFor="total-fat-input">Total Fat:</label>
<input type="number" id="total-fat-input" name="totalFat" value={totalFat} onChange={handleInputChange} step="1" />
<label htmlFor="saturated-input">Saturated Fat:</label>
<input type="number" id="saturated-input" name="saturatedFat" value={saturatedFat} onChange={handleInputChange} step="1" />
<label htmlFor="polyunsaturated-input">Polyunsaturated Fat:</label>
<input type="number" id="polyunsaturated-input" name="polyunsaturatedFat" value={polyunsaturatedFat} onChange={handleInputChange} step="1" />
<label htmlFor="monounsaturated-input">Monounsaturated Fat:</label>
<input type="number" id="monounsaturated-input" name="monounsaturatedFat" value={monounsaturatedFat} onChange={handleInputChange} step="1" />
<label htmlFor="trans-input">Trans Fat:</label>
<input type="number" id="trans-input" name="transFat" value={transFat} onChange={handleInputChange} step="1" />
<label htmlFor="cholesterol-input">Cholesterol:</label>
<input type="number" id="cholesterol-input" name="cholesterol" value={cholesterol} onChange={handleInputChange} step="1" />
<label htmlFor="sodium-input">Sodium:</label>
<input type="number" id="sodium-input" name="sodium" value={sodium} onChange={handleInputChange} step="1" />
<label htmlFor="total-carbs-input">Total Carbohydrates:</label>
<input type="number" id="total-carbs-input" name="totalCarbs" value={totalCarbs} onChange={handleInputChange} step="1" />
<label htmlFor="dietary-fiber-input">Dietary Fiber:</label>
<input type="number" id="dietary-fiber-input" name="dietaryFiber" value={dietaryFiber} onChange={handleInputChange} step="1" />
<label htmlFor="sugars-input">Sugars:</label>
<input type="number" id="sugars-input" name="sugars" value={sugars} onChange={handleInputChange} step="1" />
<label htmlFor="protein-input">Protein:</label>
<input type="number" id="protein-input" name="protein" value={protein} onChange={handleInputChange} step="1" />
<button type="submit">Submit</button>
  </form>
	  </div>
	)
}

export default NutritionInput