import React from "react";

function List(props) {
  return (
    <div>
      <h3 style={{ paddingTop: "10px" }}>List</h3>
      <hr />
      <ul>
        {props.currentItems.map((animeData) => (
          <li key={animeData._id.$oid}>
            <div>
              {animeData.English} &nbsp;&nbsp;&nbsp;=&gt;&nbsp;&nbsp;&nbsp;
              Rating: {animeData.Score} - &nbsp;&nbsp;&nbsp;Genre:
              {animeData.Genres} -&nbsp;&nbsp; &nbsp;Episodes:{" "}
              {animeData.Episodes} - &nbsp;&nbsp;&nbsp;Theme :{" "}
              {animeData.Themes} -&nbsp;&nbsp; &nbsp;Rating: {animeData.Rating}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
