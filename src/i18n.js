import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import main_en from "./locales/en/main.json";
import common_en from "./locales/en/common.json";
import main_sv from "./locales/sv/main.json";
import common_sv from "./locales/sv/common.json";

// the translations
const resources = {
  en: {
    main: main_en,
    common: common_en,
    translation: {
      welcome: "welcome to react app"
    }
  },
  sv: {
    main: main_sv,
    common: common_sv,
    translation: {
      welcome: "valkommen till react app"
    }
  }
};

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,

    lng: "en",
    fallbackLng: "en",

    debug: true,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
