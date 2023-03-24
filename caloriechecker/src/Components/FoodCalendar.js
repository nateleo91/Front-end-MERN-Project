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
  
    const date = new Date(year, month - 1, day);
    const dateString = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return (
       
    <div>
    <h1>Your Food Diary For: {dateString}</h1>
    <div>
      <label htmlFor="day" style={{ display: "inline-block" }}>Day: </label>
      <input
        type="number"
        id="day"
        name="day"
        min="1"
        max="31"
        value={day}
        onChange={handleDayChange}
        style={{ display: "inline-block", marginLeft: "10px" }}
      />        
    </div>
    </div>


);
}

export default FoodCalendar; 