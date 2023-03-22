import React, { useState } from 'react';

function SearchResult() {
  const [searchResult, setSearchResult] = useState('');

  return (
    <div>
        <h2>Matching Foods:</h2>
      {searchResult && (
        <div>
          <p>You searched for: {searchResult}</p>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
