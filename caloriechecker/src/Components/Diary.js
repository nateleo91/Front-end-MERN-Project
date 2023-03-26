import React from 'react';
import Title from '../Modules/Title';
import Tabs from '../Modules/Tabs';
import FoodCalendar from '../Modules/Diary/Calendar';
import MealTracker from '../Modules/Diary/Mealtable';
import "../css/Diary.css"

function Diary() {
  return (
    <div>
      <Title />
      <Tabs />
      <FoodCalendar />
      <MealTracker />
      
     </div>
  );
}

export default Diary;