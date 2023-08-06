import React , { useContext } from "react";
import { ThemeContext } from "../../Theme";
import SingleAccordnian from "./SingleAccordnian";
import { darkColor, lightColor } from "../../Constants";
const Accordian = () => {
  const { themeColor, setThemeColor, displayComp, setDisplayComp } =  useContext(ThemeContext);
  return (
    <div style={{
      backgroundColor: `${themeColor === "light" ? lightColor : darkColor}`,
      color: `${themeColor === "light" ? "black" : "goldenrod"}`,
      // width:"40rem",
      // border:"2px solid gold",
      overflow:"hidden"
      
    }}>
      <h1>FAQs</h1>
      <SingleAccordnian
        question={"What is RAROC ?"}
        answer={"The risk-adjusted return on capital (RAROC) is a risk-adjusted return on investment measurement. RAROC is one of the most accurate techniques for determining a bank’s profitability. Expected returns may be computed using a more informed method that includes the determined economic capital and risk exposure. Banks employ RAROC, among other tools, to control risks, particularly those arising from their lending operations, for successful risk management."}
      />

      <SingleAccordnian
        question={"What is the secondary market ?"}
        answer={"In the primary market, securities issued by a corporation for the first time are sold to the public. The stock is traded in the secondary market once the IPO is completed and the stock is listed. The key distinction between the two is that even in the primary market, investors buy securities directly from the firm through initial public offerings (IPOs), but in the secondary market, buyers buy securities from other investors who are eager to sell them."}
      />

      <SingleAccordnian
        question={"What is cost accountancy? What are its objectives ?"}
        answer={"Cost accounting is a type of managerial accounting that tries to capture a company’s entire cost of production by measuring both variable and fixed expenses, such as a leasing fee.The goal of cost accounting is to develop the procedures for recording, classifying, and allocating expenditures on commodities, labour, and overhead. This is required in order to appropriately determine the cost of items and services."}
      />

      <SingleAccordnian
        question={"What is a put option ?"}
        answer={"A put option is a contract that gives the option buyer the right, but not the responsibility, to sell or short a set quantity of an underlying securities at a predetermined price within a predetermined time frame. The striking price is the predetermined price at which the buyer of a put option can sell the underlying securities.Shares, commodities, bonds, commodities, forex, futures, and indices are all traded as underlying assets for put options. A call option, on the other hand, grants the holder the right to buy the underlying securities at a stated price, either on or before the option contract’s expiration date."}
      />

      <SingleAccordnian
        question={"What is Deferred Tax Liability ?"}
        answer={"A deferred tax liability is a line item on a company’s balance statement that represents taxes that are due but not payable until later.Scheduled to a difference in time between when the tax was accrued and when it is due to be paid, the liability is delayed."}
      />

      <SingleAccordnian
        question={"What is goodwill ?"}
        answer={"Goodwill is an intangible asset connected with the acquisition of a business by another. Goodwill is defined as the fraction of the purchase price that is more than the total of the net fair value of all assets acquired and liabilities taken in the transaction. Goodwill exists for a variety of reasons, including the value of a company’s brand name, a strong client base, good customer relations, good staff relations, and proprietary technologies."}
      />
    </div>
  );
};

export default Accordian;
