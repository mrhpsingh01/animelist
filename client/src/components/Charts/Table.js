import React from "react";
import Table from "react-bootstrap/Table";

function TableData(props) {
  return (
    <div style={{ marginRight: "180px" }}>
      <h3 style={{ paddingTop: "10px" }}>Table</h3>
      <hr />
      <Table size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Genres</th>
            <th>Episodes</th>
            <th>Theme</th>
          </tr>
        </thead>
        <tbody>
          {props.currentItems.map((animeData) => (
            <tr key={animeData.ID}>
              <td>{animeData.Popularity}</td>
              <td>{animeData.English}</td>
              <td>{animeData.Score}</td>
              <td>{animeData.Genres}</td>
              <td>{animeData.Episodes}</td>
              <td>{animeData.Themes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableData;
