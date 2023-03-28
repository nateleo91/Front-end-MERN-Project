import React, { useState } from 'react';
import Title from '../Modules/Title';
import Tabs from '../Modules/Tabs';
import SearchBar from '../Modules/Home/SearchBar';
import SearchResult from '../Modules/Home/SearchResult';
import NutritionTitle from '../Modules/Home/NutritionTitle';
import '../css/Home.css'

function Home() {
  const [searchResult, setSearchResult] = useState([]);
  
  const handleSearchQuery = (searchText) => {
    // TODO: Implement search functionality here and update searchResult state
    setSearchResult([{food_id: 1, brand_type: 'Brand A'}, {food_id: 2, brand_type: 'Brand B'}]);
  };

  return (
    <div>
      <Title />
      <Tabs />
      <SearchBar handleSearchQuery={handleSearchQuery} />
      <SearchResult searchResult={searchResult} />
      <NutritionTitle />
    </div>
  );
}

export default Home;