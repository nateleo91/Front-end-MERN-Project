import React, { useState } from 'react';
import SearchBar from '../../Modules/Home/SearchBar';
import SearchResult from '../../Modules/Home/SearchResult';








function Popup() {
    const [searchResult, setSearchResult] = useState({});
  
    const handleSearchQuery = async (searchText) => {
      // ...
    };
  
    return (
      <div className="popup">
        <SearchBar handleSearchQuery={handleSearchQuery} />
        <SearchResult searchResult={searchResult} />
      </div>
    );
  }
  
  export default Popup;
  
