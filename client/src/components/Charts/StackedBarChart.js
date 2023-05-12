import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getBarData } from "../../utilities/getBarData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function Chart(props) {
  const numofColors = 3;
  const data = getBarData(props.currentItems, numofColors);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div style={({ padding: "20px" }, { width: "70%" })}>
      <h3 style={{ paddingTop: "10px" }}>Stacked Bar Chart</h3>
      <hr />
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default Chart;
