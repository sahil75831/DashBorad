import React, { useState, createContext } from "react";
const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState("dark");
  const [displayComp, setDisplayComp] = useState(".");
  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor,displayComp, setDisplayComp }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
export { ThemeContext };

