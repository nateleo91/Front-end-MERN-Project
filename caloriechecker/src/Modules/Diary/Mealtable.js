import React, { useState } from "react";

const MealTable = () => {
  const [meal, setMeal] = useState("breakfast");
  const [foodItem, setFoodItem] = useState("");
  const [calories, setCalories] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");
  const [protein, setProtein] = useState("");
  const [sodium, setSodium] = useState("");
  const [sugar, setSugar] = useState("");
  const [mealItems, setMealItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMealItem = {
      meal: meal,
      foodItem: foodItem,
      calories: calories,
      carbs: carbs,
      fat: fat,
      protein: protein,
      sodium: sodium,
      sugar: sugar,
    };
    setMealItems([...mealItems, newMealItem]);
    setFoodItem("");
    setCalories("");
    setCarbs("");
    setFat("");
    setProtein("");
    setSodium("");
    setSugar("");
  };

  return (
    <div>
      <h1>Meal Table</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="meal">Meal:</label>
        <select id="meal" name="meal" value={meal} onChange={(event) => setMeal(event.target.value)}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
        </select>
        <label htmlFor="foodItem">Food Item:</label>
        <input id="foodItem" name="foodItem" type="text" value={foodItem} onChange={(event) => setFoodItem(event.target.value)} />
        <label htmlFor="calories">Calories:</label>
        <input id="calories" name="calories" type="number" value={calories} onChange={(event) => setCalories(event.target.value)} />
        <label htmlFor="carbs">Carbs:</label>
        <input id="carbs" name="carbs" type="number" value={carbs} onChange={(event) => setCarbs(event.target.value)} />
        <label htmlFor="fat">Fat:</label>
        <input id="fat" name="fat" type="number" value={fat} onChange={(event) => setFat(event.target.value)} />
        <label htmlFor="protein">Protein:</label>
        <input id="protein" name="protein" type="number" value={protein} onChange={(event) => setProtein(event.target.value)} />
        <label htmlFor="sodium">Sodium:</label>
        <input id="sodium" name="sodium" type="number" value={sodium} onChange={(event) => setSodium(event.target.value)} />
        <label htmlFor="sugar">Sugar:</label>
        <input id="sugar" name="sugar" type="number" value={sugar} onChange={(event) => setSugar(event.target.value)} />
        <button type="submit">Add Food</button>
      </form>
      