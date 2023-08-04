import React, { useState } from 'react'
import { UserData } from "./Data"
import {Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { Chart as ChartsJS } from 'chart.js/auto';
const Charts = () => {
    const data = {
        labels:["jan", "feb", "mar", "april", "may"],
        datasets:[
            {
                label:"Profits for year 2022 (M)",
                data:[10,2,13,4,5],
                backgroundColor:[
                "rgba(255, 99, 132, 1)",
                "rgba(255, 205, 86, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(153, 102, 255, 1)"
            ]
            },
            {
                label:"Profits for year 2023 (M)",
                data:[5,2,8,11,5],                
                backgroundColor:[
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 205, 86, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(153, 102, 255, 1)"
                ]
            }
        ]
    };

  return (
    <div>
     <Line data={data} />
     <Bar data={data} />
     <Pie data={data} />
     <Doughnut data={data} />
    </div>
  )
}

export default Charts

