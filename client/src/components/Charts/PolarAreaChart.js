import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { getBarData } from "../../utilities/getBarData";

ChartJS.register(ArcElement, RadialLinearScale, Tooltip, Legend);

function Chart(props) {
  const numofColors = 15;
  const data = getBarData(props.currentItems, numofColors);

  return (
    <div style={{ width: "100%" }}>
      <h3 style={{ paddingTop: "10px" }}>PolarArea</h3>
      <hr />
      <div style={{ marginLeft: "320px", width: "35%" }}>
        <PolarArea data={data}></PolarArea>
      </div>
    </div>
  );
}

export default Chart;
