import React from 'react';
import FoodCalendar from '../Modules/Diary/Calendar';
import MealTracker from '../Modules/Diary/Mealtable';
import "../css/Diary.css"

function Diary() {
  return (
    <div>
      <FoodCalendar />
      <MealTracker />
     </div>
  );
}

export default Diary;