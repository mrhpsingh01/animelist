import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
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
  Legend
);

function Chart(props) {
  const numofColors = 3;
  const data = getBarData(props.currentItems, numofColors);

  return (
    <div style={({ padding: "20px" }, { width: "70%" })}>
      <h3 style={{ paddingTop: "10px" }}> Line</h3>
      <hr />
      <Line data={data}></Line>
    </div>
  );
}

export default Chart;
