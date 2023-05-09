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
import randomColor from "randomcolor";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function Chart(props) {
  let barName = [];
  let barFavorites = [];
  let barMembers = [];
  let barScored_Users = [];
  const barColors = Array.from({ length: 3 }, () =>
    randomColor({ format: "rgba", alpha: 0.2 })
  );

  const barData = () =>
    props.currentItems.map((item) => {
      barName.push(item.English);
      barFavorites.push(item.Favorites);
      barMembers.push(item.Members);
      barScored_Users.push(item.Scored_Users);
      return console.log("no error");
    });
  barData();
  const data = {
    labels: barName,
    datasets: [
      {
        label: "Favourites",
        data: barFavorites,
        backgroundColor: barColors[0],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Members",
        data: barMembers,
        backgroundColor: barColors[1],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Scored_Users",
        data: barScored_Users,
        backgroundColor: barColors[2],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

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
