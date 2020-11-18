import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationSV from './locales/sv.json';

const resources = {
    en: {
      translation: translationEN
    },
    sv: {
      translation: translationSV
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources:resources,
    lng: "sv",
    fallbackLng: 'en',
    debug: false
  });

export default i18n;