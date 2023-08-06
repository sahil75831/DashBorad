import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../Theme";
import { darkColor, lightColor } from "../../Constants";
import NavBar from "../NavBar";
import css from "../../styles/TeamList.module.scss";
import IndividualList from "./IndividulaList";

const TeamList = () => {
  const [users, setUsers] = useState([]);
  const { themeColor, setThemeColor } = useContext(ThemeContext);
  const data = ["a", "b", "c", "d", "e"];
  function convertArrObj() {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr[i] = { name: data[i] };
    }
    console.log("ar ", arr);
    return arr;
  }
  useEffect(() => {
    let x = convertArrObj();
    return setUsers([...x]);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    let tempUsers;
    if (name === "allCheckBox") {
      tempUsers = users.map((user, i) => {
        return { ...user, isChecked: checked };
      });
      setUsers([...tempUsers]);
    } else {
      tempUsers = users.map((user, i) => {
        return user.name === name ? { ...user, isChecked: checked } : user;
      });
      setUsers([...tempUsers]);
    }
  };

  return (
    <div
      className={`${css.wrapper}`}
      style={{
        backgroundColor: `${themeColor === "light" ? lightColor : darkColor}`,
        color: `${themeColor === "light" ? "black" : "white"}`,
      }}
    >
      <div className={`${css.container}`}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <NavBar
            primaryText={"TEAM"}
            secondaryText={"Managing The Team Members"}
          />
        </div>
        <div className={`${css.wrapperOut}`}>
          <div className={`${css.wrapperIn}`}>
            <div style={{ boxShadow: "2px 2px 12px black" }}>
              <input
                className={`${css.wrapperInOut}`}
                type="checkbox"
                name="allCheckBox"
                onChange={handleChange}
                checked={!users.some((user) => user.isChecked !== true)}
              />
              <label htmlFor="allCheckBox" className={`${css.wrapperInIn}`}>
                <IndividualList
                  id={"id"}
                  name={"Name"}
                  phoneNumber={"Phone No."}
                  age={"age"}
                  email={"email"}
                  mainText={
                    <p
                      style={{
                        letterSpacing: "1px",
                        fontWeight: "700",
                        paddingLeft: "0.1rem",
                        paddingRight: "0.1rem",
                      }}
                    >
                      View Profile
                    </p>
                  }
                />
              </label>
            </div>

            {users.map((user, i) => {
              return (
                <>
                  <br />
                  <div style={{ boxShadow: "2px 2px 12px black" }}>
                    <input
                      type="checkbox"
                      name={user.name}
                      checked={user.isChecked || false}
                      onChange={handleChange}
                      className={`${css.wrapperCheck}`}
                    />
                    <label
                      htmlFor={user.name}
                      className={`${css.wrapperCheckLabel}`}
                    >
                      <IndividualList
                        id={1}
                        name={"sahil"}
                        phoneNumber={"+91-776353538"}
                        age={23}
                        email={"sahil@gmail.com"}
                        mainText={
                          <p
                            style={{
                              letterSpacing: "4px",
                              fontWeight: "500",
                              paddingLeft: "1rem",
                              paddingRight: "1rem",
                            }}
                          >
                            ADMIN
                          </p>
                        }
                      />
                    </label>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;

{
  /* <IndividualList
      id={1}
      name={"sahil"}
      phoneNumber={"+91-776353538"}
      age={23}
      email={"sahil@gmail.com"}
    />, */
}
{
  /* <span>Select all</span>
            <span>id</span>
            <span>Name</span>
            <span>Age</span>
            <span>Phone number</span>
            <span>Email</span> */
}
