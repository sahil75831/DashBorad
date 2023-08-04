import React, { useContext } from "react";
import { ThemeContext } from "./Theme";
import css from "./Appp.module.scss";
import {WiMoonAltWaningGibbous2} from "react-icons/wi"
import "./Appp.css";
import { darkColorBackground, lightColorBackground } from "./Constants";
const Appp = () => {
  const { themeColor, setThemeColor } = useContext(ThemeContext);  
  document.body.style.backgroundColor = (themeColor === "light"? lightColorBackground:darkColorBackground)
  return (
    <div className={`${css.wrapper}`}>
    <div className={`${css.container}`}>
    <div className={themeColor==="dark" ?`${css.dark}` : `${css.light}`}>   
      <span style={{fontSize:"1.5rem"}}
        onClick={() =>
          themeColor == "dark" ? setThemeColor("light") : setThemeColor("dark")
        }
      >
        <WiMoonAltWaningGibbous2/>
      </span>
    </div>
    </div>
    </div>
  );
};

export default Appp;
