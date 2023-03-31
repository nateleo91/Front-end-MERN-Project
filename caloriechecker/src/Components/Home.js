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

  return (
    <div>
      <Header handleInput={handleInput} handleLogIn={handleLogIn} handleSignUp={handleSignUp}/>
      <NutritionTitle />
      <Footer />
    </div>
  );
}

export default Home;
