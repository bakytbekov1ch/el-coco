import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationKy from "./ky/translationky.json";
import translationRu from "./ru/translationru.json";
import translationEn from "./en/translationen.json";

i18next.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRu },
    ky: { translation: translationKy },
    en: { translation: translationEn },
  },
  lng: "en",
});

export default i18next;
