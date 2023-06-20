import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "./Translation/English/translation.json";
import translationFrench from "./Translation/French/translation.json";
import translationArabic from "./Translation/Arabic/translation.json";
import translationFilipino from "./Translation/Filipino/translation.json";
import translationFinnish from "./Translation/Finnish/translation.json";
import translationGerman from "./Translation/German/translation.json";
import translationHindi from "./Translation/Hindi/translation.json";
import translationIndonesian from "./Translation/Indonesian/translation.json";
import translationLithuanian from "./Translation/Lithuanian/translation.json";
import translationNorwegian from "./Translation/Norwegian/translation.json";
import translationPolish from "./Translation/Polish/translation.json";
import translationPortuguese from "./Translation/Portuguese/translation.json";
import translationSpanish from "./Translation/Spanish/translation.json";
import translationSwedish from "./Translation/Swedish/translation.json";
import translationThai from "./Translation/Thai/translation.json";

const resources = {
  en: { translation: translationEnglish },
  fr: { translation: translationFrench },
  ar: { translation: translationArabic },
  fil: { translation: translationFilipino },
  fi: { translation: translationFinnish },
  de: { translation: translationGerman },
  hi: { translation: translationHindi },
  id: { translation: translationIndonesian },
  lt: { translation: translationLithuanian },
  no: { translation: translationNorwegian },
  pl: { translation: translationPolish },
  pt: { translation: translationPortuguese },
  es: { translation: translationSpanish },
  sv: { translation: translationSwedish },
  th: { translation: translationThai },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18next;
