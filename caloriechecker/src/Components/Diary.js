import React from 'react';
import Title from '../Modules/Title';
import FoodCalendar from '../Modules/Diary/Calendar';
import MealTable from '../Modules/Diary/Mealtable';


function Diary() {
  return (
    <div>
      <div>
        <Title />
        <FoodCalendar />
      </div>
      <div>
        <h1>My Meal Tracker</h1>
        <MealTable />
      </div>
    </div>
  );
}

export default Diary;