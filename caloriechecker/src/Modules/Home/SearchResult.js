import React, { useState } from 'react';

function SearchResult({ searchResult }) {
  return (
    <div className="searchResult">
      {searchResult && (
        <div>
          {searchResult.map((food) => (
            <div key={food.brand_type}>
              <p>Food ID: {food.food_id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;