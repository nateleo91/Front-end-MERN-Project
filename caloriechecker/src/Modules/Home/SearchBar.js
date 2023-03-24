import React, { useState } from 'react';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <h2>Search food database by name:</h2>
      <input type="text" value={searchText} onChange={handleSearchTextChange} />
    </div>
  );
}

export default SearchBar;
