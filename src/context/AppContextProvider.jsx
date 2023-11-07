import React, { useState } from "react";
import AppContext from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [timeFormat, setTimeFormat] = useState("HH:mm");
  const [dateTimeFormat, setDateTimeFormat] = useState("DD/MM/YYYY HH:mm");

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        language,
        setLanguage,
        dateFormat,
        setDateFormat,
        timeFormat,
        setTimeFormat,
        dateTimeFormat,
        setDateTimeFormat,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
