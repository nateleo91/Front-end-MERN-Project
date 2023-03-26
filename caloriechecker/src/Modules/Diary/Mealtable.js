import React from 'react';
import "../../css/Mealtable.css";

class MealTable extends React.Component {
  constructor() {
    super();

    this.state = {
      meals: [
        {
          mealType: 'Breakfast',
          calories: 0,
          carbs: 0,
          fat: 0,
          protein: 0,
          sodium: 0,
          sugar: 0
        },
        {
          mealType: 'Lunch',
          calories: 0,
          carbs: 0,
          fat: 0,
          protein: 0,
          sodium: 0,
          sugar: 0
        },
        {
          mealType: 'Dinner',
          calories: 0,
          carbs: 0,
          fat: 0,
          protein: 0,
          sodium: 0,
          sugar: 0
        },