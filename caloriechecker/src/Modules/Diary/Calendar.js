import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/Calendar.css";

function FoodCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const dateString = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="calendarBody" style={{textAlign: 'center'}}>
  <h1>Your Food Diary For: {dateString}</h1>
  <div>
    <label htmlFor="date" style={{ display: "inline-block" }}>
     Date{" "}
     
    </label>
   <DatePicker
      style={{ textAlign: "center" }}  // NEW LINE
      id="date"
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MM-dd-yyyy"
      minDate={new Date("1900-01-01")}
      maxDate={new Date("2100-12-31")}
    />

  </div>
</div>
  );
}

export default FoodCalendar;


