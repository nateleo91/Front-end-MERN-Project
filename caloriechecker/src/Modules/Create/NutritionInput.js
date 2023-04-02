import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Create.css'

function NutritionInput() {
	const [nutritionInputs, setNutritionInputs] = useState({
		food_name: '',
		calories: '',
		totalFat: '',
		iron: '',
		vitamin_a: '',
		vitamin_c: '',
		calcium: '',
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
		await axios.post("https://calorie-trakr.herokuapp.com/foods/addFood", nutritionInputs)
		//changed url for deployment
		.then((res) => {
			console.log(res)
		})
	  };
	  
	  const handleUpdate = async (event) => {
		event.preventDefault();
		const foodName = food_name
		await axios.put("https://calorie-trakr.herokuapp.com/foods/updateFood/"+foodName, nutritionInputs)
		.then((res) => {
			console.log(res)
		})
		.catch((error) => {
			console.log(error)
		})
	  }
	  
	  const { food_name, calories, totalFat, iron, vitamin_a, vitamin_c, calcium, cholesterol, sodium, carbohydrate, fiber, sugar, protein } = nutritionInputs;	
	
	  return(
		<div className="Create">
		<h2>Enter Nutritional Information</h2>

		<form className="createForm">
			<label id="createLabel" htmlFor="name-input">Food name:</label>
				<input type="text" id="name-input" name="food_name" value={food_name} onChange={handleInputChange} />
			<label htmlFor="calories-input">Calories:</label>
				<input type="text" className="numInput" id="calories-input" name="calories" value={calories} onChange={handleInputChange} step="1" />

			<label id="createLabel" htmlFor="total-fat-input">Total Fat (g):</label>
				<input type="text" className="numInput" id="total-fat-input" name="totalFat" value={totalFat} onChange={handleInputChange} step="1" />
			<label id="createLabel" htmlFor="saturated-input">Iron (%):</label>
				<input type="text" className="numInput" id="saturated-input" name="iron" value={iron} onChange={handleInputChange} step="1" />
			<label id="createLabel" htmlFor="polyunsaturated-input">Vitamin A (%):</label>
				<input type="text" className="numInput" id="polyunsaturated-input" name="vitamin_a" value={vitamin_a} onChange={handleInputChange} step="1" />
			<label id="createLabel" htmlFor="monounsaturated-input">Vitamin C (%):</label>
				<input type="text" className="numInput" id="monounsaturated-input" name="vitamin_c" value={vitamin_c} onChange={handleInputChange} step="1" />
			<label id="createLabel" htmlFor="trans-input">Calcium (mg):</label>
				<input type="text" className="numInput" id="trans-input" name="calcium" value={calcium} onChange={handleInputChange} step="1" />
			<label id="createLabel" htmlFor="cholesterol-input">Cholesterol (mg):</label>
				<input type="text" className="numInput" id="cholesterol-input" name="cholesterol" value={cholesterol} onChange={handleInputChange} step="1" />
			<label id="createLabel" htmlFor="sodium-input">Sodium (mg):</label>
				<input type="text" className="numInput" id="sodium-input" name="sodium" value={sodium} onChange={handleInputChange} step="1" />
			<label id="createLabel" htmlFor="total-carbs-input">Total Carbohydrates (g):</label>
				<input type="text" className="numInput" id="total-carbs-input" name="carbohydrate" value={carbohydrate} onChange={handleInputChange} step="1" />
			<label id="createLabel" htmlFor="dietary-fiber-input">Dietary Fiber (g):</label>
				<input type="text" className="numInput" id="dietary-fiber-input" name="fiber" value={fiber} onChange={handleInputChange} step="1" />
			<label id="createLabel" htmlFor="sugars-input">Sugars (g):</label>
				<input type="text" className="numInput" id="sugars-input" name="sugar" value={sugar} onChange={handleInputChange} step="1" />
			<label id="createLabel" htmlFor="protein-input">Protein (g):</label>
				<input type="text" className="numInput" id="protein-input" name="protein" value={protein} onChange={handleInputChange} step="1" />
				
			<button className="submit" type="submit" onClick={handleSubmit}>Submit</button>
			<button className="submit" type="submit" onClick={handleUpdate}>Update</button>
		</form>
			</div>
			)
		}

		export default NutritionInput