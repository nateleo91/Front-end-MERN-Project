import React from 'react';
import Title from '../Modules/Title';
import SearchBar from '../Modules/SearchBar';
import SearchResult from '../Modules/SearchResult';
import NutritionFacts from '../Modules/NutritionFacts';
// import Css from './homeCss'

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
