import { addLocaleData } from "react-intl";

import en from "react-intl/locale-data/en";
import en_US_Messages from "./Example/en-US.json";

import ne from "react-intl/locale-data/ne";
import ne_Messages from "./Example/ne.json";

import de from "react-intl/locale-data/de";
import de_DE_Messages from "./Example/de-DE.json";

const locales = {
  en: {
    locale: "en",
    messages: en_US_Messages
  },
  ne: {
    locale: "ne",
    messages: ne_Messages
  },
  de: {
    locale: "de-DE",
    messages: de_DE_Messages
  }
};

addLocaleData([...en, ...ne, ...de]);

export const getLocaleData = locale =>
  locales[locale] ? locales[locale] : locales["ne"];
