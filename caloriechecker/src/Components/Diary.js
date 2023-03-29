import React from 'react';
import Header from '../Modules/Header';
import Footer from '../Modules/Footer';
import FoodCalendar from '../Modules/Diary/Calendar';
import MealTracker from '../Modules/Diary/Mealtable';
import "../css/Diary.css"

function Diary() {
  return (
    <div>
      <Header />
      <FoodCalendar />
      <MealTracker />
      <Footer />
     </div>
  );
}

export default Diary;