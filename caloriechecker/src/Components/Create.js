import React from 'react';
import Title from '../Modules/Title';
import Tabs from '../Modules/Tabs';
import Footer from '../Modules/Footer';
import NutritionInput from '../Modules/Create/NutritionInput'
import "../css/Create.css"

function Create() {
  return (
    <div>
      <Title />
      <Tabs />
      <NutritionInput />
      <Footer />
    </div>
  );
}

export default Create;