import React, { useState } from "react";

function FoodCalendar() {
    const [day, setDay] = useState(new Date().getDate());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
  
    const handleDayChange = (event) => {
      setDay(parseInt(event.target.value));
    };
  
    const handleMonthChange = (event) => {
      setMonth(parseInt(event.target.value));
    };
  
    const handleYearChange = (event) => {
      setYear(parseInt(event.target.value));
    };
  
   
}

export default FoodCalendar; 