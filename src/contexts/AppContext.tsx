import { createContext, useState } from "react";

export interface AppContextInterface {
  language?: "pt" | "en";
  changeLanguage?: (language: AppContextInterface["language"]) => void;
  isPT?: () => boolean;
}

export const AppContext = createContext({} as AppContextInterface);

export function AppContextProvider({ children }) {
  const browserLanguage = navigator.language.startsWith("pt") ? "pt" : "en";
  const localStorageLanguage = localStorage.getItem("lang") as AppContextInterface["language"]

  const [language, setLanguage] =
    useState<AppContextInterface["language"]>(localStorageLanguage || browserLanguage);

  const changeLanguage = (language: AppContextInterface["language"]) => {
    setLanguage(language);
    localStorage.setItem("lang", language);
  };

  const isPT = () => language === "pt";

  return (
    <AppContext.Provider
      value={{
        language,
        changeLanguage,
        isPT,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
