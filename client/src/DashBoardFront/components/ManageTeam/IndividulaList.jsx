import React , { useContext } from "react";
import { ThemeContext } from "../../Theme";
import { darkColor, lightColor } from "../../Constants";
import css from "../../styles/IndividulaList.module.scss";

const IndividualList = ({id, name, age, phoneNumber, email, mainText}) => {
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
        
        <span>{id}</span>
        <span>{name}</span>
        <span>{age}</span>
        <span>{phoneNumber}</span>
        <span><button style={{padding:"0.5rem", backgroundColor:"palegreen", border:"none", cursor:"pointer",borderRadius:"5px", fontSize:"1.3rem" }}>{mainText}</button></span>
        </div>
        
        
      </div>
    </div>
    </div>
  )
}

export default IndividualList
