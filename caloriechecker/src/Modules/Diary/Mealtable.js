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

 