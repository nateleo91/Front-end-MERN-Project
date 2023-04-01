import React, { useState } from 'react';
import SearchBar from '../../Modules/Home/SearchBar';
import PopupResults from './popupResults';
import axios from 'axios';








function Popup() {
    const [searchResult, setSearchResult] = useState({});
  
    const handleSearchQuery = async (searchText) => {

      await axios.get("http://localhost:4000/foods/searchFood?food=" + searchText)
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
        <PopupResults searchResult={searchResult} />
      </div>
    );
  }
  
  export default Popup;
  
