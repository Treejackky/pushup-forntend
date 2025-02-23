import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend"

import commonTh from '../public/locales/th/translation.json'
import commonEn from '../public/locales/en/translation.json'

const resources = {
  th: { common: commonTh },
  en: { common: commonEn },
}

const options = {
  order: ['path', 'querystring', 'navigator'],
  lookupFromPathIndex: 0,
  lookupQuerystring: 'lng',
}

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: 'en' // <--- turn off for detection to work
    detection: options,
    resources,
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en',
    supportedLngs: ['th', 'en'],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  })

export default i18n