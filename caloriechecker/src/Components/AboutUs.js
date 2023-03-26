import React from 'react';
import Title from '../Modules/Title';
import Tabs from '../Modules/Tabs';
import Person from './PersonBio';
import "../css/AboutUs.css"

function About() {
  return (
    <div>
      <Title />
      <Tabs />
      <Person />
    </div>
  );
}

export default About;