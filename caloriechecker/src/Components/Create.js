import React from 'react';
import Header from '../Modules/Header';
import Footer from '../Modules/Footer';
import NutritionInput from '../Modules/Create/NutritionInput'
import "../css/Create.css"

function Create() {
  return (
    <div>
      <Header />
      <NutritionInput />
      <Footer />
    </div>
  );
}

export default Create;