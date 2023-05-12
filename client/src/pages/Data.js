import React, { useState, useEffect } from "react";
import Pagination from "../utilities/Pagination";
import axios from "axios";
import viewArray from "../utilities/ViewsArray";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import ViewsButtons from "../utilities/ViewsButtons";
import bgImage from "../assets/desktop-1920x1080.jpg";

function Data() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);
  const [currentView, setCurrentView] = useState("list"); // added state variable

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

  const itemsPerPage = 15;
  const totalPages = Math.ceil(animeList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = animeList.slice(startIndex, endIndex);

  const CurrentViewComponent = viewArray.find(
    (view) => view.name === currentView
  )?.component;

  const logOut = () => {
    localStorage.removeItem("token");
    alert("Logout successful");
    navigate("/");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPositionX: "left",
        backgroundPositionY: "bottom",
        backgroundColor: "yellow",
      }}
    >
      <Nav
        navColor="dark"
        authorized={true}
        logOut={logOut}
        email={localStorage.email}
      />
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

        <ViewsButtons
          viewArray={viewArray}
          setCurrentView={setCurrentView}
          currentView={currentView}
        />
      </div>
    </div>
  );
}

export default Data;
