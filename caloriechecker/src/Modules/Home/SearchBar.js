import React, { useState } from 'react';
import '../../css/Home.css'

function SearchBar({ handleSearchQuery }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchButtonClick = () => {
    handleSearchQuery(searchText);
  };

  return (
    <div className="searchBar">
      <h6>Search food database by name:</h6>
        <div className="inputSearch">
          <input type="text" className="searchFor" value={searchText} onChange={handleSearchTextChange} />
          <button onClick={handleSearchButtonClick} className="searchButton">Search</button>
        </div>
      <h5 className="resultsTitle">Matching Foods:</h5>
    </div>
  );
}

export default SearchBar;