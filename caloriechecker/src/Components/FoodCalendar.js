import React, { useState } from "react";

function FoodCalendar() {
    const date = new Date();
    const dateString = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    return (
      <div>
        <h1>Your Food Diary For: {dateString}</h1>
      </div>
    );
  }
  
  export default FoodCalendar;
  