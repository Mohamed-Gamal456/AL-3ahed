import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ar from "./ar.json";
import en from "./en.json";
import servicesAr from "./services/services.ar.json";
import servicesEn from "./services/services.en.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ar: {
                translation: {
                    ...ar,
                    services: servicesAr,
                },
            },
            en: {
                translation: {
                    ...en,
                    services: servicesEn,
                },
            },
        },

        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },

        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },
    });

export default i18n;