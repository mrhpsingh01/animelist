import React, { useState, useEffect } from "react";
import Pagination from "../utilities/Pagination";
import axios from "axios";
import viewArray from "../utilities/ViewsArray";
import Nav from "../components/Nav";

function Data() {
  const [currentPage, setCurrentPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);
  const [currentView, setCurrentView] = useState("list"); // added state variable

  const itemsPerPage = 15;
  const totalPages = Math.ceil(animeList.length / itemsPerPage);

  useEffect(() => {
    axios
      .get("https://anime-list-7xnx.onrender.com/api/anime_data")
      .then((response) => {
        setAnimeList(response.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = animeList.slice(startIndex, endIndex);

  const CurrentViewComponent = viewArray.find(
    (view) => view.name === currentView
  )?.component;

  const logOut = () => {
    localStorage.removeItem("token");
    alert("Logout successful");
    window.location.href = "/";
  };

  return (
    <div>
      <Nav authorized={true} logOut={logOut} email={localStorage.email} />
      <div style={{ marginLeft: "220px" }}>
        <div>
          {CurrentViewComponent && (
            <CurrentViewComponent currentItems={currentItems} />
          )}
        </div>

        <div style={{ marginLeft: "600px" }}>{currentPage}</div>
        <div style={{ marginLeft: "380px", marginBottom: "20px" }}>
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>

        {/* Button to switch between list and table view */}
        <div className="view-switch">
          {viewArray.map(({ name, component }) => (
            <button
              key={name}
              onClick={() => setCurrentView(name)}
              disabled={currentView === name}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)} View
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Data;
