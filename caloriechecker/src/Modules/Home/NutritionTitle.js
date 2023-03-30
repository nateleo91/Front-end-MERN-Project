import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

function NutritionFacts() {
  const [value, setValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [searchResult, setSearchResult] = useState([]);

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }

  function handleSearchQuery(query) {
    // Make an API call to get the search result based on the query
    // Store the result in the searchResult state variable
    setSearchResult(searchResult);
  }

  
  return (
    <div id="content">
      <div className="left">
        <SearchBar handleSearchQuery={handleSearchQuery} />
        <SearchResult searchResult={searchResult} />
      </div>
      
    <div>
    <h2 className="nutritionTitle">Nutrition Facts</h2>
        <label htmlFor="number-input" className="servings">
          Servings:
        </label>
        <input
          type="number"
          step="0.01"
          id="number-input"
          value={value}
          onChange={handleInputChange}
        />

        <select
          id="dropdown-menu"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="option1">----------</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <div className="nutritionInfo">
          <table className='nutritionTable'>
            <tbody className='tableBody'>
              <tr>
              <td class="col-1">Calories</td>
              <td class="col-2">0</td>
              <td class="col-1">Sodium</td>
              <td class="col-2">0 mg</td>
              </tr>
              <tr>
              <td class="col-1">Total Fat</td>
              <td class="col-2">0 g</td>
              <td class="col-1">Potassium</td>
              <td class="col-2">0 mg</td>
              </tr>
              <tr>
              <td class="col-1 sub">Saturated</td>
              <td class="col-2">0 g</td>
              <td class="col-1">Total Carbs</td>
              <td class="col-2">0 g</td>
              </tr>
              <tr>
              <td class="col-1 sub">Polyunsaturated</td>
              <td class="col-2">0 g</td>
              <td class="col-1">Dietary Fiber</td>
              <td class="col-2">0 g</td>
              </tr>
              <tr>
              <td class="col-1 sub">Monounsaturated</td>
              <td class="col-2">0 g</td>
              <td class="col-1">Sugars</td>
              <td class="col-2">0 g</td>
              </tr>
              <tr>
              <td class="col-1 sub">Trans</td>
              <td class="col-2">0 g</td>
              <td class="col-1">Protein</td>
              <td class="col-2">0 g</td>
              </tr>
              <tr class="last">
                <td class="col-1">Cholesterol</td>
                <td class="col-2">0 mg</td>
                <td class="col-1">&nbsp;</td>
                <td class="col-2">&nbsp;</td>
              </tr>
                  <tr class="alt">
                <td class="col-1">Vitamin A</td>
                <td class="col-2">0%</td>
                <td class="col-1">Calcium</td>
                <td class="col-2">0%</td>
              </tr>
                  <tr class="last">
                <td class="col-1">Vitamin C</td>
                <td class="col-2">0%</td>
                <td class="col-1">Iron</td>
                <td class="col-2">0%</td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
  </div>
  );
}

export default NutritionFacts;
