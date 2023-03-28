import React, { useState } from 'react';

function SearchResult({ searchResult }) {
  
  return (
    <div className="searchResult">
      {searchResult.data && (
        <div>
          {
          /* searchResult.data[0].food_name */
          searchResult.data.map((food) => (
            <div key={food._id}>
              <p>Food name: {food.food_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;