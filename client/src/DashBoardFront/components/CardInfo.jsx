import React, { useContext } from "react";
import { ThemeContext } from "../Theme";
import css from "../styles/CardInfo.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { darkColor, lightColor } from "../Constants";
import ChartCard from "./ChartCard";

const CardInfo = ({cardOne}) => {
    const { themeColor, setThemeColor } = useContext(ThemeContext);
    return (
    <div className={`${css.wrapper}`}
    style={{
      backgroundColor: `${themeColor === "light" ? lightColor : darkColor}`,
      color: `${themeColor === "light" ? "black" : "white"}`,
    }}>
      <div className={`${css.container}`}>

        <div className={`${css.first}`}>
          <div className={`${css.icon}`}><AiOutlineMail /></div>
          <div className={`${css.textOne}`}>{cardOne.textOne}</div>
          <div className={`${css.textTwo}`}>{cardOne.textTwo}</div>
        </div>

        <div className={`${css.second}`}>
          <div className={`${css.secondOne}`} >
          graph
          {/* <ChartCard type={"Doughnut"} width={"100px"} height={"50px"} primaryText={""} secondaryText={""} /> */}
          </div>
          <div className={`${css.secondTwo}`}>27%</div>
        </div>

      </div>
    </div>
  );
};

export default CardInfo;
