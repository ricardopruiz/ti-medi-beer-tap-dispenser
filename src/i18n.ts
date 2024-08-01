import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import spanishTranslations from "./locales/es-ES/translation.json";
import englishTranslations from "./locales/en-UK/translation.json";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "dayjs/locale/en";

const resources = {
  es: { translation: spanishTranslations },
  en: { translation: englishTranslations },
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
  });

// init dayjs with the language i18n detected
dayjs.locale(i18n.language);

export default i18n;
