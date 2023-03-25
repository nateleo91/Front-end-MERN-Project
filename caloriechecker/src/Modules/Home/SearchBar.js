import React, { useState } from 'react';

function SearchBar({ handleSearchQuery }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchButtonClick = () => {
    handleSearchQuery(searchText);
  };

  return (
    <div className="searchBar" id="wrap">
      <h2>Search food database by name:</h2>
      <input type="text" className="searchfor" value={searchText} onChange={handleSearchTextChange} />
      <button onClick={handleSearchButtonClick} className="searchButton">Search</button>
      <h2 className="resultsTitle">Matching Foods:</h2>
    </div>
  );
}

export default SearchBar;