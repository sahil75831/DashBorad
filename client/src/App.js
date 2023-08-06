import React, { useContext } from "react";
import { ThemeContext } from "../src/DashBoardFront/Theme";
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
import Event from "./DashBoardFront/components/events/Event";
import Accordian from "./DashBoardFront/components/Accordnian/Accordian";
import CardInfoChart from "./DashBoardFront/components/CardInfoChart";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiPayMoney,GiPiggyBank } from "react-icons/gi";
const App = () => {
  const { themeColor, setThemeColor, displayComp, setDisplayComp } =
    useContext(ThemeContext);
  return (
    <>
      <div className={`${css.wrapper}`}>
        <div
          className={`${css.container}`}
          style={{ display: "flex", flexDirection: "row", gap: ".4rem" }}
        >
          <div className={`${css.containerSidebar}`}>
            <SideBar />
          </div>
          <div className={`${css.divTwoWrapper}`}>
            <div className={`${css.divTwoContainer}`} style={{border:"0px solid yellow"}}>
              <div className={`${css.divTwoContainerTopbar}`}>
                <Topbar />
              </div>

              <div className={`${css.divTwoContainerNavbar}`}>
                <NavBar
                  primaryText={"DASHBOARD"}
                  secondaryText={"Welcome To Your Dashboard"}
                />
              </div>

              {/* change components here */}
              <div
                className={`${css.out}`}
                style={{
                  border: "2px solid yellow",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                }}
              >
                <div style={{ display: displayComp === "BAR" ? true : "none" }}>
                  <ChartCard
                    type={"Bar"}
                    width={"900px"}
                    height={"700px"}
                    primaryText={"Revenue Generated"}
                    secondaryText={"$32,152.00"}
                  />
                </div>
                <div
                  style={{ display: displayComp === "LINE" ? true : "none" }}
                >
                  <ChartCard
                    type={"Line"}
                    width={"900px"}
                    height={"700px"}
                    primaryText={"Revenue Generated"}
                    secondaryText={"$32,152.00"}
                  />
                </div>
                <div style={{ display: displayComp === "PIE" ? true : "none" }}>
                  <ChartCard
                    type={"Pie"}
                    width={"800px"}
                    height={"600px"}
                    primaryText={"Revenue Generated"}
                    secondaryText={"$32,152.00"}
                  />
                </div>
                
                <div
                  style={{ display: displayComp === "WORLD" ? true : "none" }}
                >
                  <ChartCard
                    type={"World"}
                    width={"800px"}
                    height={"600px"}
                    primaryText={"Revenue Generated"}
                    secondaryText={"$32,152.00"}
                  />
                </div>

                <div
                  style={{ display: displayComp === "MANAGETEAM" ? true : "none" }}
                >
                  <TeamList />
                </div>

                <div
                  style={{ display: displayComp === "HANDLEREMINDER" ? true : "none" }}
                >
                  <Event />
                </div>

                <div
                  style={{ display: displayComp === "HANDLEFAQ" ? true : "none" }}
                >
                  <Accordian />
                </div>

                <div className={`${css.divTwoContainerCards}`}>
                  <CardInfo
                    cardOne={{
                      head:<GiPiggyBank />,
                      textOne: "$32,152.00",
                      textTwo: "Profits",
                      graph: (
                        <CardInfoChart
                          type={"Doughnut"}
                          width={"100px"}
                          height={"100px"}
                          primaryText={"in millions"}
                          secondaryText={2023}
                          label={"Profits"}
                        />
                      ),
                    }}
                  />
                  <CardInfo
                    cardOne={{
                      head:<GiPayMoney/>,
                      textOne: "$32,152.00",
                      textTwo: "Spendings",
                      graph: (
                        <CardInfoChart
                          type={"Pie"}
                          width={"100px"}
                          height={"100px"}
                          primaryText={"in millions"}
                          secondaryText={2023}
                          label={"Spendings"}
                        />
                      ),
                    }}
                  />
                  <CardInfo
                    cardOne={{
                      head: <RiMoneyDollarCircleFill />,
                      textOne: "$87,791.00",
                      textTwo: "Gross Income",
                      graph: (
                        <CardInfoChart
                          type={"Doughnut"}
                          width={"100px"}
                          height={"100px"}
                          primaryText={"in millions"}
                          secondaryText={2023}
                          label={"G I"}
                        />
                      ),
                    }}
                  />

                </div>

                <div
                  className={`${css.divTwoContainerCharts}`}
                  style={{flexDirection:"row",justifyContent:"space-around",gap:"0.1rem" ,display: displayComp === "BAR" ? "none" : "true" }}
                >
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
              </div>
              <div className={`${css.divTwoContainerCharts}`}> </div>
            </div>
          </div>
        </div>
      </div>
{/*  */}
      {/* <TeamList /> */}
      {/* <Event /> */}
      {/* <Accordian /> */}
    </>
    // </ThemeContextProvider>
  );
};

export default App;
