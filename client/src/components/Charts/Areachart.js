import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getBarData } from "../../utilities/getBarData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

function Chart(props) {
  const numofColors = 3;
  const data = getBarData(props.currentItems, numofColors);

  return (
    <div style={{ width: "70%" }}>
      <h3 style={{ paddingTop: "10px" }}>Area Chart</h3>
      <hr />
      <Line data={data}></Line>
    </div>
  );
}

export default Chart;
