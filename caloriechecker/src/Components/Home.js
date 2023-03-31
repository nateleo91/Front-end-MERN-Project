import React, { useState } from "react";
import NutritionTitle from "../Modules/Home/NutritionTitle";
import axios from "axios";
import "../css/Home.css";

function Home(props) {
  const handleInput = props.handleInput
  const handleLogIn = props.handleLogIn
  const handleSignUp = props.handleSignUp

  return (

    <div>
      <NutritionTitle />
    </div>
  );
}

export default Home;
