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

  return (
    <div style={({ padding: "20px" }, { width: "70%" })}>
      <h3 style={{ paddingTop: "10px" }}>Area Chart</h3>
      <hr />
      <Bar data={data}></Bar>
    </div>
  );
}

export default Chart;
