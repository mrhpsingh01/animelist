import randomColor from "randomcolor";

export const getBarData = (currentItems, numofColors) => {
  const barName = [];
  const barFavorites = [];
  const barMembers = [];
  const barScored_Users = [];
  const barColors = Array.from({ length: numofColors }, () =>
    randomColor({ format: "rgba", alpha: 1 })
  );

  currentItems.forEach((item) => {
    barName.push(item.English);
    barFavorites.push(item.Favorites);
    barMembers.push(item.Members);
    barScored_Users.push(item.Scored_Users);
  });

  return {
    labels: barName,
    datasets: [
      {
        label: "Favourites",
        data: barFavorites,
        backgroundColor: numofColors > 5 ? barColors : barColors[0],
        borderColor: "black",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "Scored_Users",
        data: barScored_Users,
        backgroundColor: numofColors > 5 ? barColors : barColors[1],
        borderColor: "black",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "Members",
        data: barMembers,
        backgroundColor: numofColors > 5 ? barColors : barColors[2],
        borderColor: "black",
        borderWidth: 1,
        fill: true,
      },
    ],
  };
};
