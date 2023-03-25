import React from 'react';
import Title from '../Modules/Title';
import Tabs from '../Modules/Tabs';
import FoodCalendar from '../Modules/Diary/Calendar';
import MealTable from '../Modules/Diary/Mealtable';
import "../css/Diary.css"

function Diary() {
  return (
    <div>
      <Title />
      <Tabs />
      <FoodCalendar />
      <MealTable />
     </div>
  );
}

export default Diary;