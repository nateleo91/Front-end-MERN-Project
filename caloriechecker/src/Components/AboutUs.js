import React from 'react';
import Title from '../Modules/Title';
import Tabs from '../Modules/Tabs';
import Person from './PersonBio';
import Footer from '../Modules/Footer';
import "../css/AboutUs.css"

function About() {
  return (
    <div>
      <Title />
      <Tabs />
      <Person />
      <Footer />
    </div>
  );
}

export default About;