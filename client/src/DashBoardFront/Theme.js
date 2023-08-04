import React, { useState, createContext } from "react";
const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState("dark");
  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
export { ThemeContext };

