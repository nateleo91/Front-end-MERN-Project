import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { i18n } from 'i18next';
import Select from 'react-select';
import '../css/footer.css'



function Footer() {
    const { t } = useTranslation();
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
            Wightloss Tracker</a></button>
            <button><a className="link">{t('blogs')}</a></button>
            <button><a className="link">{t('terms')}</a></button>
            <button><a className="link">{t('privacy')}</a></button>
            <button><a className="link">{t('contact')}</a></button>
            <button><a className="link">{t('feedback')}</a></button>
            <button><a className="link">{t('community')}</a></button>
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