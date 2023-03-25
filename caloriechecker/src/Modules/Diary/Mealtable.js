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

