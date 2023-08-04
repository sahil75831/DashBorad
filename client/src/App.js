import React from "react";
import ThemeContextProvider from "../src/DashBoardFront/Theme";
import Appp from "./DashBoardFront/Appp";
import SideBar from "./DashBoardFront/components/SideBar";
import Topbar from "./DashBoardFront/components/Topbar";
import CardInfo from "./DashBoardFront/components/CardInfo";
import Charts from "./DashBoardFront/components/Charts";
import ChartCard from "./DashBoardFront/components/ChartCard";
import NavBar from "./DashBoardFront/components/NavBar";
import css from "./App.module.scss";
import TeamList from "./DashBoardFront/components/ManageTeam/TeamList";
const App = () => {
  return (
    <ThemeContextProvider>
      <div className={`${css.wrapper}`}>
        <div
          className={`${css.container}`}
          style={{ display: "flex", flexDirection: "row", gap: "0.4rem" }}
        >
          <div className={`${css.containerSidebar}`}>
            <SideBar />
          </div>
          <div className={`${css.divTwoWrapper}`}>
            <div className={`${css.divTwoContainer}`}>

              <div className={`${css.divTwoContainerTopbar}`}>
                <Topbar />
              </div>

              <div className={`${css.divTwoContainerNavbar}`}>
                <NavBar primaryText={"DASHBOARD"} secondaryText={"Welcome To Your Dashboard"}/>
              </div>

              {/* <Charts/> */}
              <div className={`${css.divTwoContainerCards}`}>
                <CardInfo cardOne={{ textOne: 12361, textTwo: "email sent" }} />
                <CardInfo cardOne={{ textOne: 12361, textTwo: "email sent" }} />
                <CardInfo cardOne={{ textOne: 12361, textTwo: "email sent" }} />
                <CardInfo cardOne={{ textOne: 12361, textTwo: "email sent" }} />
              </div>

              <div className={`${css.divTwoContainerCharts}`}>
              <ChartCard
                  type={"Line"}
                  width={"480px"}
                  height={"300px"}
                  primaryText={"Revenue Generated"}
                  secondaryText={"$32,152.00"}
                />
                
              <ChartCard
                  type={"Bar"}
                  width={"480px"}
                  height={"300px"}
                  primaryText={"Revenue Generated"}
                  secondaryText={"$32,152.00"}
                />
              </div>
              <div className={`${css.divTwoContainerCharts}`}>
              <ChartCard
                  type={"Pie"}
                  width={"380px"}
                  height={"200px"}
                  primaryText={"Revenue Generated"}
                  secondaryText={"$32,152.00"}
                />
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <TeamList />
    </ThemeContextProvider>
  );
};

export default App;
