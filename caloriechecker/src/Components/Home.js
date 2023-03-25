import React from 'react';
import Title from '../Modules/Title';
import Tabs from '../Modules/Tabs';
import SearchBar from '../Modules/Home/SearchBar';
import SearchResult from '../Modules/Home/SearchResult';
import NutritionTitle from '../Modules/Home/NutritionTitle';
import '../css/Home.css'

function Home() {
  return (
    <div>
      <Title />
      <Tabs />
      <SearchBar />
      <SearchResult />
      <NutritionTitle />
    </div>
  );
}

export default Home;
