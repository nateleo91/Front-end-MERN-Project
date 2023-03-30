import React, { useState } from 'react';

function SearchResult({ searchResult }) {
  
  return (
    <div className="searchResult">
      {searchResult.data && (
        <div className="resultBox">
          {
          /* searchResult.data[0].food_name */
          searchResult.data.map((food) => (
            <div key={food._id}>
              <p>{food.food_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;