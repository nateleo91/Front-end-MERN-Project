import React from 'react';
import Title from '../Modules/Title';
import SearchBar from '../Modules/Home/SearchBar';
import SearchResult from '../Modules/Home/SearchResult';
import NutritionFacts from '../Modules/Home/NutritionFacts';
import "../css/Home.css"

function Home() {
  return (
    <div>
      <Title />
      <SearchBar />
      <SearchResult />
      <NutritionFacts />
    </div>
  );
}

export default Home;
