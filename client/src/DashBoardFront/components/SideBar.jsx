import React, { useContext } from "react";
import { ThemeContext } from "../Theme";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiFillContacts,
  AiFillPieChart,
  AiOutlineLineChart,
} from "react-icons/ai";
import { BsLayoutTextSidebar, BsFillBarChartFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import css from "../styles/SideBar.module.scss";
import { darkColor, lightColor } from "../Constants";
const SideBar = () => {
  const { themeColor, setThemeColor } = useContext(ThemeContext);
  return (
    <div
      className={`${css.wrapper}`}
      style={{
        backgroundColor: `${themeColor === "light" ? lightColor : darkColor}`,
        color: `${themeColor === "light" ? "black" : "white"}`,
      }}
    >
      <div className={`${css.container}`}>
        <div className={`${css.first}`}>
          <div>ADMINS</div>
          <div>
            <BsLayoutTextSidebar />
          </div>
        </div>

        <div className={`${css.second}`}>
          <img src="" alt="img"></img>
          <div>Sahil</div>
          <div>03-08-2023</div>
        </div>
        <div style={{fontSize:"0.9rem",letterSpacing:"3px",fontWeight:"600" ,color: `${themeColor === "light" ? "darkslateblue" : "orange"}`,}}>DATA</div>
        <div className={`${css.third}`}>
          <div>
            <AiOutlineHome />
          </div>
          <div>Dashboard</div>
        </div>
        <div className={`${css.third}`}>
          <div>
            <AiOutlineTeam />
          </div>
          <div>Manage Team</div>
        </div>
        <div className={`${css.third}`}>
          <div>
            <AiFillContacts />
          </div>
          <div>Contact Information</div>
        </div>
        <div className={`${css.third}`}>
          <div>
            <FaFileInvoiceDollar />
          </div>
          <div>Invoices Balances</div>
        </div>
        <div className={`${css.third}`}>
          <div>
            <AiFillContacts />
          </div>
          <div>Profile</div>
        </div>
        <div style={{fontSize:"0.9rem",letterSpacing:"3px",fontWeight:"600" ,color: `${themeColor === "light" ? "darkslateblue" : "orange"}`,}}>PAGES</div>
       
        <div className={`${css.third}`}>
          <div>
            <AiFillContacts />
          </div>
          <div>Calender</div>
        </div>
        <div className={`${css.third}`}>
          <div>
            <AiFillContacts />
          </div>
          <div>FAQs Page</div>
        </div>
        <div className={`${css.third}`}>
          <div>
            <BsFillBarChartFill />
          </div>
          <div>Bar</div>
        </div>
        <div style={{fontSize:"0.9rem",letterSpacing:"3px",fontWeight:"600" ,color: `${themeColor === "light" ? "darkslateblue" : "orange"}`,}}>CHARTS</div>
        <div className={`${css.third}`}>
          <div>
            <AiFillPieChart />
          </div>
          <div>pie</div>
        </div>
        <div className={`${css.third}`}>
          <div>
            <AiOutlineLineChart />
          </div>
          <div>line</div>
        </div>
        <div className={`${css.third}`}>
          <div>
            <GiWorld />
          </div>
          <div>Geography</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
