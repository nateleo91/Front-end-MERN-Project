import React from 'react';
import Header from '../Modules/Header';
import Person from './PersonBio';
import Footer from '../Modules/Footer';
import "../css/AboutUs.css"

function About() {
  return (
    <div>
      <Header />
      <Person />
      <Footer />
    </div>
  );
}

export default About;