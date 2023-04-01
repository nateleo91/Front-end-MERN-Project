











import React from 'react';
import "../../css/Mealtable.css";
import Popup from './popup';

class MealTable extends React.Component {
  constructor() {
    super();

    this.state = {
      meals: [
        { type: 'Breakfast', ...this.initNutrientsObject() },
        { type: 'Lunch', ...this.initNutrientsObject() },
        { type: 'Dinner', ...this.initNutrientsObject() },
        { type: 'Snacks', ...this.initNutrientsObject() },
      ],
      isOpen: false
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

  handleAddFoodClick = () => {
    this.setState({ isOpen: true });
  };

  renderMealRow(meal) {
    return (
      <tr key={meal.mealType}>
        <td>{meal.type}</td>
        <td>{meal.calories} kcal</td>
        <td>{meal.carbs} g</td>
        <td>{meal.fat} g</td>
        <td>{meal.protein} g</td>
        <td>{meal.sodium} mg</td>
        <td>{meal.sugar} g</td>        
        <td><a href="#" onClick={() => this.handleAddFoodClick()}>Add Food</a></td>
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
        
        {this.state.isOpen && <Popup onClose={() => this.setState({ isOpen: false })} />}

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
            {this.state.meals.map(this.renderMealRow.bind(this))}
            <tr>
              <td>Totals:</td>
              <td>{totals.calories}</td>
              <td>{totals.carbs}</td>
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

