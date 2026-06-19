import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', display: 'ES' },
    { code: 'en', name: 'English', display: 'EN' }
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const detectedLanguage = i18n.resolvedLanguage || i18n.language;
  const currentLang =
    languages.find((lang) => detectedLanguage?.startsWith(lang.code)) ||
    languages.find((lang) => lang.code === 'en');

  return (
    <div className="language-switcher-container">
      <button
        type="button"
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        title="Select language"
      >
        <span className="lang-display">
          {currentLang?.display}
        </span>
        <span className="lang-chevron">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={`language-option ${detectedLanguage?.startsWith(lang.code) ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="option-code">{lang.display}</span>
              <span className="option-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
