import React, { useState } from "react";
import NavBar from "../NavBar";
import css from "../../styles/TeamList.module.scss";
import IndividualList from "./IndividulaList";

const TeamList = () => {
  const [users, SetUser] = useState();
  const [usersChecked, SetUserChecked] = useState(false);
  const data = ["a", "b", "c", "d", "e"];
//   const data = [{a:"a"}, {b:"b"}, {c:"c"}, {d:"d"}, {e:"e"}];
  const handleChange = (e) => {
    const {name, checked} = e.target;
    SetUserChecked(true)
    console.log("name ",name)
    console.log("checked ",checked)
    console.log("e.target ",e.target)
    
  };
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.container}`}>
        <NavBar
          primaryText={"TEAM"}
          secondaryText={"Managing The Team Members"}
        />
        <div className={`${css.listCheckBox}`}>
              <input type="checkbox" name="allcheckbox" onChange={()=>usersChecked===false?SetUserChecked(true):SetUserChecked(false)}/>
              <label htmlFor="allcheckbox">select all</label>
            </div>
        {data.map((e, i) => {
          return (
            <div className={`${css.listCheckBox}`}>
              <input type="checkbox" name="checkbox" checked={usersChecked} onChange={()=>SetUserChecked(false)} />
              <label htmlFor="checkbox">{e}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamList;
