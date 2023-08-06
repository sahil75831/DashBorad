import React, { useContext } from "react";
import { ThemeContext } from "../Theme";
import css from "../styles/CardInfo.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { darkColor, lightColor } from "../Constants";
import ChartCard from "./ChartCard";
import CardInfoChart from "./CardInfoChart";

const CardInfo = ({ cardOne }) => {
  const { themeColor, setThemeColor } = useContext(ThemeContext);
  return (
    <div
      className={`${css.wrapper}`}
      style={{
        backgroundColor: `${themeColor === "light" ? lightColor : darkColor}`,
        color: `${themeColor === "light" ? "black" : "white"}`,
        // border:"none"

        // border:"3px solid darkslateblue"
      }}
    >
      <div className={`${css.container}`}>
        <div className={`${css.first}`} style={{ width: "17rem" }}>
          <div
            className={`${css.icon}`}
            style={{ fontSize: "1.5rem", color: `${themeColor === "light" ? "dodgerblue" : "greenyellow"}` }}
          >
            {/* <AiOutlineMail /> */}
            {cardOne.head}
          </div>
          <div className={`${css.textOne}`} style={{ fontSize: "1.7rem" , color: `${themeColor === "light" ? "crimson" : "wheat"}` }}>
            {cardOne.textOne}
          </div>
          <div
            className={`${css.textTwo}`}
            style={{ fontSize: "1.5rem",  color: `${themeColor === "light" ? "dodgerblue" : "greenyellow"}`  }}
          >
            {cardOne.textTwo}
          </div>
        </div>

        <div className={`${css.second}`}>
          <div
            className={`${css.secondOne}`}
            // style={{ }}
          >
            {cardOne.graph}
          </div>
          <div className={`${css.secondTwo}`}>{/* 27% */}</div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
