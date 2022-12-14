import React, { useState, createContext, useContext } from "react";

import { languageOptions, dictionaryList } from "../languages/index";

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: "fa",
  dictionary: dictionaryList.fa, //from JSON file
});
// it provides the language context to app
export function LanguageProvider({ children }) {
  //   const defaultLanguage = window.localStorage.getItem("rcml-lang");
  const [userLanguage, setUserLanguage] = useState("fa");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

// get text according to id & current language
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
}
