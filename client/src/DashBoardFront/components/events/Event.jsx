import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Theme";
import css from "../../styles/Events.module.scss";
import { darkColor, lightColor } from "../../Constants";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Event = () => {

  const [note, setNote] = useState();
  const [time, setTime] = useState();
  const { themeColor, setThemeColor, displayComp, setDisplayComp } =
    useContext(ThemeContext);
  const currentTime = new Date().toUTCString();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTime(currentTime);
  };
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.container}`} >
        <form onSubmit={handleSubmit}>
          <div
            className={`${css.date}`}
            style={{
              backgroundColor: `${
                themeColor === "light" ? "darkslateblue" : darkColor
              }`,
              color: `${themeColor === "light" ? "white" : "orangered"}`,
              width:"100%"
            }}
          >
            {currentTime}
          </div>
          <div
            className={`${css.date}`}
            style={{
              backgroundColor: `${
                themeColor === "light" ? "darkslateblue" : darkColor
              }`,
              color: `${themeColor === "light" ? "white" : "greenyellow"}`,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <div>
                <AiFillDelete />
              </div>

              <div>
                <AiFillEdit />
              </div>
            </div>
          </div>
          <textarea
            className={`${css.text}`}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write Yoyr Note here..."
            style={{
              backgroundColor: `${
                themeColor === "light" ? lightColor : darkColor
              }`,
              color: `${themeColor === "light" ? "black" : "wheat"}`,
            }}
          />
          <button
            type="submit"
            className={`${css.button}`}
            style={{
              backgroundColor: `${
                themeColor === "light" ? lightColor : darkColor
              }`,
              color: `${themeColor === "light" ? "black" : "goldenrod"}`,
            }}
          >
            Set Reminder

          </button>
        </form>
      </div>
    </div>
  );
};

export default Event;
