import React, { useState } from 'react';

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
		<div>
		<h2>Enter Nutritional Information</h2>

		<form onSubmit={handleSubmit}>
    <label htmlFor="name-input">Name:</label>
    <input type="text" id="name-input" name="name" value={name} onChange={handleInputChange} />
    <label htmlFor="calories-input">Calories:</label>
    <input type="number" step="0.01" id="calories-input" name="calories" value={calories} onChange={handleInputChange} />
    <label htmlFor="total-fat-input">Total Fat:</label>
    <input type="number" step="0.01" id="total-fat-input" name="totalFat" value={totalFat} onChange={handleInputChange} />
    <label htmlFor="saturated-input">Saturated Fat:</label>
    <input type="number" step="0.01" id="saturated-input" name="saturatedFat" value={saturatedFat} onChange={handleInputChange} />
    <label htmlFor="polyunsaturated-input">Polyunsaturated Fat:</label>
    <input type="number" step="0.01" id="polyunsaturated-input" name="polyunsaturatedFat" value={polyunsaturatedFat} onChange={handleInputChange} />
    <label htmlFor="monounsaturated-input">Monounsaturated Fat:</label>
    <input type="number" step="0.01" id="monounsaturated-input" name="monounsaturatedFat" value={monounsaturatedFat} onChange={handleInputChange} />
    <label htmlFor="trans-input">Trans Fat:</label>
    <input type="number" step="0.01" id="trans-input" name="transFat" value={transFat} onChange={handleInputChange} />
    <label htmlFor="cholesterol-input">Cholesterol:</label>
    <input type="number" step="0.01" id="cholesterol-input" name="cholesterol" value={cholesterol} onChange={handleInputChange} />
    <label htmlFor="sodium-input">Sodium:</label>
    <input type="number" step="0.01" id="sodium-input" name="sodium" value={sodium} onChange={handleInputChange} />
    <label htmlFor="total-carbs-input">Total Carbohydrates:</label>
    <input type="number" step="0.01" id="total-carbs-input" name="totalCarbs" value={totalCarbs} onChange={handleInputChange} />
    <label htmlFor="dietary-fiber-input">Dietary Fiber:</label>
    <input type="number" step="0.01" id="dietary-fiber-input" name="dietaryFiber" value={dietaryFiber} onChange={handleInputChange} />
    <label htmlFor="sugars-input">Sugars:</label>
    <input type="number" step="0.01" id="sugars-input" name="sugars" value={sugars} onChange={handleInputChange} />
    <label htmlFor="protein-input">Protein:</label>
    <input type="number" step="0.01" id="protein-input" name="protein" value={protein} onChange={handleInputChange} />
    <button type="submit">Submit</button>
  </form>
	  </div>
	)
}

export default NutritionInput