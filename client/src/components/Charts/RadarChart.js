import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { getBarData } from "../../utilities/getBarData";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function Chart(props) {
  const data = getBarData(props.currentItems);
  return (
    <div style={{ width: "100%" }}>
      <h3 style={{ paddingTop: "10px" }}>Radar Chart</h3>
      <hr />
      <div style={{ marginLeft: "320px", width: "35%" }}>
        <Radar data={data}></Radar>
      </div>
    </div>
  );
}

export default Chart;
