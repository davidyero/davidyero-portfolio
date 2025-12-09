import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
import homeEn from './lang/en/home.json';
import aboutEn from './lang/en/about.json';
import appsEn from './lang/en/apps.json';
import commonEn from './lang/en/common.json';

// Spanish translations
import homeEs from './lang/es/home.json';
import aboutEs from './lang/es/about.json';
import appsEs from './lang/es/apps.json';
import commonEs from './lang/es/common.json';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

const getInitialLanguage = (): string => {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (savedLanguage) {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.split('-')[0];
  return browserLanguage === 'es' ? 'es' : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...homeEn,
          ...aboutEn,
          ...appsEn,
          ...commonEn,
        }
      },
      es: {
        translation: {
          ...homeEs,
          ...aboutEs,
          ...appsEs,
          ...commonEs,
        }
      },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Save language to localStorage when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
});

export default i18n;
