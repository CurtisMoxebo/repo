import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// translation files
import * as en from "./locales/en.json";
import * as fr from "./locales/fr.json";

export const getBrowserLanguage = () =>
  navigator.languages
  ? navigator.languages[0]
  : (navigator.language || navigator.userLanguage)

i18n
  .use(initReactI18next)
  .init({
    lng: getBrowserLanguage(),
    fallbackLng: "en",
    resources: {
      en, fr
    },
    interpolation: {
      escapeValue: false
    }
  });
