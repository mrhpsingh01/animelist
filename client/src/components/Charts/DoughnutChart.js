import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getBarData } from "../../utilities/getBarData";

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart(props) {
  const data = getBarData(props.currentItems);

  return (
    <div style={{ width: "100%" }}>
      <h3 style={{ paddingTop: "10px" }}>Doughnut Chart</h3>
      <hr />
      <div style={{ marginLeft: "320px", width: "35%" }}>
        <Doughnut data={data}></Doughnut>
      </div>
    </div>
  );
}

export default Chart;
