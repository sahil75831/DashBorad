import React, { useContext } from "react";
import { ThemeContext } from "../Theme";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { Chart as ChartsJS } from "chart.js/auto";
import css from "../styles/ChartCard.module.scss";
import { darkColor, lightColor } from "../Constants";
const CardInfoChart = ({
  type,
  width,
  height,
  primaryText,
  secondaryText,
  label,
}) => {
  const { themeColor, setThemeColor, displayComp, setDisplayComp } =
    useContext(ThemeContext);

  const data = {
    labels: [label],
    datasets: [
      {
        label: [2023],
        data: [70, 100 - 70],
        backgroundColor: [
          "#eb4034",
          "#e5eb34",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderColor: "#5c34eb",
      },
    //   {
    //       label:"Profits for year 2023 (Millions)",
    //       data:[5,2,8,11,5,5,2,8,11,5,2,2],
    //       backgroundColor:[
    //           "rgba(255, 99, 132, 1)",
    //           "rgba(255, 205, 86, 1)",
    //           "rgba(54, 162, 235, 1)",
    //           "rgba(255, 159, 64, 1)",
    //           "rgba(153, 102, 255, 1)"
    //       ],
    //       borderColor:"yellow"
    //   }
    ],
  };
  return (
    <div
      className={`${css.wrapper}`}
      style={{
        backgroundColor: `${themeColor === "light" ? lightColor : darkColor}`,
        color: `${themeColor === "light" ? "black" : "white"}`,
        boxShadow:"none"
      }}
    >
      <div className={`${css.container}`} >
        <div className={`${css.containerHead}`}>
          <span>{primaryText}</span>
          <span>{secondaryText}</span>
        </div>

        <div className={`${css.containerBody}`} style={{ width, height }}>
          {type === "Line" ? (
            <Line data={data} style={{ width, height }} />
          ) : (
            ""
          )}
          {type === "Bar" ? <Bar data={data} style={{ width, height }} /> : ""}
          {type === "Doughnut" ? (
            <Doughnut data={data} style={{ width, height }} />
          ) : (
            ""
          )}
          {type === "Pie" ? <Pie data={data} style={{ width, height }} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default CardInfoChart;
