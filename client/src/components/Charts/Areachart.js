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
import randomColor from "randomcolor";

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
        fill: true,
      },
      {
        label: "Scored_Users",
        data: barScored_Users,
        backgroundColor: barColors[1],
        borderColor: "black",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "Members",
        data: barMembers,
        backgroundColor: barColors[2],
        borderColor: "black",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {};

  return (
    <div style={({ padding: "20px" }, { width: "70%" })}>
      <h3 style={{ paddingTop: "10px" }}>Area Chart</h3>
      <hr />
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default Chart;
