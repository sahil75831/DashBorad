import React , { useContext } from "react";
import { ThemeContext } from "../Theme";
import Appp from '../Appp'
import SearchBar from './SearchBar'
import Settings from './Settings'
import css from "../styles/Topbar.module.scss"
import { darkColor, lightColor } from "../Constants";
const Topbar = () => {
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
        <SearchBar />
        </div>
        <div className={`${css.second}`}>
        <Appp/>
        <Settings/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Topbar
