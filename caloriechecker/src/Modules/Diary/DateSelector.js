import React, { useState } from 'react';
import { format, addDays, subDays, parseISO } from 'date-fns';
function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (e) => {
    setSelectedDate(parseISO(e.target.value));
  };
  const handlePrevDay = () => {
    setSelectedDate(subDays(selectedDate, 1));
  };
  const handleNextDay = () => {
    setSelectedDate(addDays(selectedDate, 1));
  };
  return (
    <div>
      <input type="date" value={format(selectedDate, 'yyyy-MM-dd')} onChange={handleDateChange} />
      <button onClick={handlePrevDay}>Prev Day</button>
      <button onClick={handleNextDay}>Next Day</button>
    </div>
  );
}
export default DateSelector;