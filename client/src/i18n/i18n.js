import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from '../locales/es.json';
import en from '../locales/en.json';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    load: 'languageOnly',
    debug: false,
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ['localStorage'],
    },
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Save language preference when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
});

export default i18n;
