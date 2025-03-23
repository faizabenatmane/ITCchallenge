import React, { useState } from 'react';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('English');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'English' ? 'French' : 'English'));
  };

  return (
    <button onClick={toggleLanguage} className="language-btn">
      {language}<span> ▾</span>
    </button>
  );
};

export default LanguageSwitcher;
