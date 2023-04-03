import React, { useState } from 'react';
import axios from 'axios';
import "../../css/Mealtable.css";
import Popup from './popup';
import { parse } from 'date-fns';

function MealTable() {
  const [meals, setMeals] = useState([
    { type: 'Breakfast', ...initNutrientsObject() },
    { type: 'Lunch', ...initNutrientsObject() },
    { type: 'Dinner', ...initNutrientsObject() },
    { type: 'Snacks', ...initNutrientsObject() },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState(null);

  function initNutrientsObject() {
    return {
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
      sodium: 0,
      sugar: 0
    }
  }

  function handleAddFoodClick(mealType) {
    setSelectedMealType(mealType);
    setIsOpen(true);
  }

  function renderMealRow(meal) {
    return (
      <tr key={meal.type}>
        <td>{meal.type}</td>
        <td>{meal.calories} kcal</td>
        <td>{meal.carbs} g</td>
        <td>{meal.fat} g</td>
        <td>{meal.protein} g</td>
        <td>{meal.sodium} mg</td>
        <td>{meal.sugar} g</td>        
        <td><a href="#" onClick={() => handleAddFoodClick(meal.type)}>Add Food</a></td>
      </tr>
    );
  }

  function calculateTotals() {
    let totals = {
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
      sodium: 0,
      sugar: 0
    };
    for (let meal of meals) {
      Object.keys(totals).forEach(nutrient=>
        totals[nutrient] += meal[nutrient]
      )
    }
    return totals;
  }

  let totals = calculateTotals();

  async function addFoodToMeal(foodId) {
    let foodNutritionObject = await axios.get(
      "https://calorie-trakr.herokuapp.com/foods/" + foodId
    );
    const updatedMeals = [...meals];
    const selectedMeal = updatedMeals.find((meal) => meal.type === selectedMealType);
    Object.keys(selectedMeal).forEach(nutrient => {
      if (nutrient !== 'type') {
        selectedMeal[nutrient] += foodNutritionObject.data[nutrient];
      }
    });
    setMeals(updatedMeals);
  }

  return (
    <div>
      <h1 className="mealTitle">Meal Table</h1>
      {isOpen && <Popup onClose={() => setIsOpen(false)} addFoodToMeal={addFoodToMeal} />}
      <table className= "mealTable">
        <thead>
          <tr>
            <th>Meal Type</th>
            <th>Calories (kcal)</th>
            <th>Carbs (g)</th>
            <th>Fat (g)</th>
            <th>Protein (g)</th>
            <th>Sodium (mg)</th>
            <th>Sugar (g)</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
        {meals.map((meal, index) => {
            const runningTotals = {
                calories: index === 0 ? meal.calories : meal.calories + meals[index-1].calories,
                carbs: index === 0 ? meal.carbs : meal.carbs + meals[index-1].carbs,
                fat: index === 0 ? meal.fat : meal.fat + meals[index-1].fat,
                protein: index === 0 ? meal.protein : meal.protein + meals[index-1].protein,
                sodium: index === 0 ? meal.sodium : meal.sodium + meals[index-1].sodium,
                sugar: index === 0 ? meal.sugar : meal.sugar + meals[index-1].sugar
            };
        return renderMealRow(meal, runningTotals);
        })} 
           <tr>
             <td>Totals:</td>
             <td>{Math.round(totals.calories)}</td>
             <td>{Math.round(totals.carbs)}</td>
             <td>{Math.round(totals.fat)}</td>
             <td>{Math.round(totals.protein)}</td>
             <td>{Math.round(totals.sodium)}</td>
             <td>{Math.round(totals.sugar)}</td>
           </tr>
         </tbody>
       </table>
     </div>
   );
}

export default MealTable;

