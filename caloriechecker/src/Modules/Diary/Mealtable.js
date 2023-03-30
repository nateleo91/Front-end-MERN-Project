import React from 'react';
import "../../css/Mealtable.css";

class MealTable extends React.Component {
  constructor() {
    super();

    this.state = {
      meals: [
        { type: 'Breakfast', ...this.initNutrientsObject() },
        { type: 'Lunch', ...this.initNutrientsObject() },
        { type: 'Dinner', ...this.initNutrientsObject() },
        { type: 'Snacks', ...this.initNutrientsObject() }
      ]
    };
  }
  
  initNutrientsObject(){
      return {
        calories: 0,
        carbs: 0,
        fat: 0,
        protein: 0,
        sodium: 0,
        sugar: 0
      }
  }

  renderMealRow(meal) {
    const handleAddFoodClick = () => {
      // Open a popup when Add Food is clicked
      const popupWindow = window.open("path/to/popup.html", "Add Food", "width=400,height=500");
       // Fetch data from the food database API
       fetch('https://food-database-api.com/api/foods')
       .then(response => response.json())
       .then(data => {
         // Display the fetched data in the popup
         const popupContent = `
           <h2>Select food to add:</h2>
           <ul>
             ${data.map(food => `<li>${food.name} (${food.calories} kcal)</li>`).join('')}
           </ul>
         `;
         popupWindow.document.body.innerHTML = popupContent;
       })
       .catch(error => {
         console.error('Error fetching food data:', error);
         popupWindow.close();
       });
   };
   
   return (
      <tr key={meal.mealType}>
        <td>{meal.type}</td>
        <td>{meal.calories} kcal</td>
        <td>{meal.carbs} g</td>
        <td>{meal.fat} g</td>
        <td>{meal.protein} g</td>
        <td>{meal.sodium} mg</td>
        <td>{meal.sugar} g</td>        
        <td><a href="#" onClick={handleAddFoodClick}>Add Food</a></td>
      </tr>
  );
  }

  calculateTotals() {
  let totals = {
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
    sodium: 0,
    sugar: 0
  };
  for (let meal of this.state.meals) {
    Object.keys(totals).forEach(nutrient=>
      totals[nutrient] += meal[nutrient]
    )
  }
  return totals;
  }

  render() {
    let totals = this.calculateTotals();
    return (
      <div>
        <h1>Meal Table</h1>
        <table>
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
            {this.state.meals.map(this.renderMealRow)}
            <tr>
              <td>Totals:</td>
             <td>{totals.calories}</td><td>{totals.carbs}</td>
              <td>{totals.fat}</td>
              <td>{totals.protein}</td>
              <td>{totals.sodium}</td>
              <td>{totals.sugar}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MealTable;