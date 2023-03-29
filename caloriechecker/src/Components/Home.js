import React, { useState } from "react";
import Header from "../Modules/Header";
import Footer from '../Modules/Footer';
import SearchBar from "../Modules/Home/SearchBar";
import SearchResult from "../Modules/Home/SearchResult";
import NutritionTitle from "../Modules/Home/NutritionTitle";
import axios from "axios";
import "../css/Home.css";

function Home(props) {
  const handleInput = props.handleInput
  const handleLogIn = props.handleLogIn
  const handleSignUp = props.handleSignUp
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchQuery = async (searchText) => {
    // TODO: Implement search functionality here and update searchResult state
    /* setSearchResult([{food_id: 1, brand_type: 'Brand A'}, {food_id: 2, brand_type: 'Brand B'}]); */
    await axios.get("http://localhost:4000/foods/searchFood?food=" + searchText)
      .then((res) => {
        console.log(res)
        setSearchResult(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <SearchBar handleSearchQuery={handleSearchQuery} />
      <SearchResult searchResult={searchResult} />
      <NutritionTitle />
      <Footer />
    </div>
  );
}

export default Home;
