import React, { useState } from 'react';

function NutritionButtons() {
  const [value, setValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div id="wrap">
      <label htmlFor="number-input" className="servings">Servings:</label>
      <input type="number" step="0.01" id="number-input" value={value} onChange={handleInputChange} />

      <select id="dropdown-menu" value={selectedOption} onChange={handleSelectChange}>
        <option value="option1">----------</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default NutritionButtons