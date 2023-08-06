import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Theme";
import { darkColor, lightColor } from "../../Constants";

const SingleAccordnian = ({ question, answer }) => {
  const [display, setDisplay] = useState("none");
  const [displaysign, setDisplaysign] = useState("+");
  const { themeColor, setThemeColor, displayComp, setDisplayComp } =
    useContext(ThemeContext);

  const handleDisplay = (prev) => {
    display === "none" ? setDisplay(true) : setDisplay("none");
    display === "none" ? setDisplaysign("-") : setDisplaysign("+");
  };

  return (
    <div>
      <div
        style={{
          // width: "30rem",
          height: "fitContent",
          border: "1px solid dodgerblue",
          cursor: "pointer",
          backgroundColor: `${themeColor === "light" ? lightColor : darkColor}`,
          color: `${themeColor === "light" ? "black" : "black"}`,
          // width: "40rem",
          // border:"2px solid gold"
        }}
      >
        <div
          style={{
            backgroundColor: "darkslateblue",
            fontSize: "1.7rem",
            padding: "1rem",
            color: "wheat",
          }}
          onClick={handleDisplay}
        >
          <span

            style={{
              backgroundColor: "dodgerblue",
              fontSize: "1.7rem",
              padding: "0.21rem",
              borderRadius: "50%",
              color: "wheat",
            }}
          >
            {" "}
            {displaysign}
          </span>
          {question}
        </div>
        <div
          style={{
            display: display,
            backgroundColor: "wheat",
            fontSize: "1.2rem",
            padding: "0.81rem",
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default SingleAccordnian;
