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
            <a href="/" className="link">
            CalorieTrakr</a>
            <a className="link">{('blogs')}</a>
            <a className="link">{('terms')}</a>
            <a className="link">{('privacy')}</a>
            <a className="link">{('contact')}</a>
            <a className="link">{('feedback')}</a>
            <a className="link">{('community')}</a>
          </div>
          <div className="language-container">
            <Select
              options={languages}
              value={selectedLanguage}
              placeholder="language"
              onChange={handleLanguageChange}
              menuPlacement="top"
            />
          </div>
        </div>
      </footer>
    );
  }

export default Footer;