import React, { useState } from 'react';
import Select from 'react-select';
// import '../css/Footer.css'



function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  // add more languages as needed
];

  return (
    <footer>
    <div className="title">
      <a href='/' className="link"> <h1 className="titleText">Weightloss Tracker</h1></a>
      <Select
          options={languages}
          value={selectedLanguage}
          onChange={setSelectedLanguage}
        />
      <button>Blogs</button>
      <button>Terms</button>
      <button>Privacy</button>
      <button>Contact</button>
      <button>Feedback</button>
      <button>Community</button>
    </div>
    </footer>
  );
}

export default Footer;