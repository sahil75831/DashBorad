import React , { useContext } from "react";
import { ThemeContext } from "../Theme";
import { darkColor, lightColor } from "../Constants";
import css from "../styles/NavBar.module.scss";
const NavBar = ({primaryText, secondaryText}) => {
    const { themeColor, setThemeColor } = useContext(ThemeContext);
  return (
    <div className={`${css.wrapper}`}
    style={{
      backgroundColor: `${themeColor === "light" ? lightColor : darkColor}`,
      color: `${themeColor === "light" ? "black" : "white"}`,
    }}>
    <div className={`${css.container}`}>
      <div className={`${css.bar}`}>
        <div className={`${css.first}`}>
        <span>{primaryText}</span>
        <span>{secondaryText}</span>
        </div>
        <div className={`${css.second}`}>
        <button>Download Report</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar
