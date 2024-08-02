import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import spanishTranslations from "./locales/es-ES/translation.json";
import englishTranslations from "./locales/en-UK/translation.json";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "dayjs/locale/en";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

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
// init dayjs with the plugins utilized
dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(relativeTime);

export default i18n;
