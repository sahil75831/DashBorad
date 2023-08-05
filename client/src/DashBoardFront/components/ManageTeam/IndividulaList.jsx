import React , { useContext } from "react";
import { ThemeContext } from "../../Theme";
import { darkColor, lightColor } from "../../Constants";
import css from "../../styles/IndividulaList.module.scss";

const IndividualList = ({id, name, age, phoneNumber, email}) => {
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
        <span>{email}</span>
        </div>
        
        
      </div>
    </div>
    </div>
  )
}

export default IndividualList
