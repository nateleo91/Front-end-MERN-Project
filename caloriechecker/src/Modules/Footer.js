import React, { useState } from 'react';
import Select from 'react-select';
import '../css/footer.css'



function Footer() {
    // const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    
    const languages = [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Español' },
      { value: 'fr', label: 'Français' },
    ];
  
    const handleLanguageChange = (selectedOption) => {
      setSelectedLanguage(selectedOption.value);
    //   i18n.changeLanguage(selectedOption.value);
    };
  
    return (
      <footer>
        <div className="footer-container">
          <div className="buttons-container">
            <button><a href="/" className="link">
            Weightloss Tracker</a></button>
            <button><a className="link">{('blogs')}</a></button>
            <button><a className="link">{('terms')}</a></button>
            <button><a className="link">{('privacy')}</a></button>
            <button><a className="link">{('contact')}</a></button>
            <button><a className="link">{('feedback')}</a></button>
            <button><a className="link">{('community')}</a></button>
          </div>
          <div className="language-container">
            <Select
              options={languages}
              value={selectedLanguage}
              onChange={handleLanguageChange}
            />
          </div>
        </div>
      </footer>
    );
  }

export default Footer;