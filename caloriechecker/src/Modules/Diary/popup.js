import React, { useState } from 'react';
import SearchBar from '../../Modules/Home/SearchBar';
import PopupResults from './popupResults';
import axios from 'axios';

function Popup(props) {
  const { addFoodToMeal } = props;
  const [searchResult, setSearchResult] = useState({});

  const handleSearchQuery = async (searchText) => {
    await axios
      .get('https://calorie-trakr.herokuapp.com/foods/searchFood?food=' + searchText)
      //changed url for deployment
      .then((res) => {
        setSearchResult(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="popup">
      <SearchBar handleSearchQuery={handleSearchQuery} />
      <PopupResults searchResult={searchResult} addFoodToMeal={addFoodToMeal} />
    </div>
  );
}

export default Popup;
