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
       