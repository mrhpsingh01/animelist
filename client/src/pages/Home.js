import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "react-bootstrap/Button";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function validateToken() {
      const req = await fetch("https://anime-list-7xnx.onrender.com/api/home", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const data = await req.json();
      if (data.message === "valid") {
        setLoggedIn(data.message === "valid");
      } else {
        navigate("/");
      }
    }

    validateToken();
  });

  const logOut = () => {
    localStorage.removeItem("token");
    alert("Logout successful");
    navigate("/");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div
          style={{
            backgroundColor: "#000",
            width: "100%",
            height: "100vh",
            color: "yellow",
          }}
        >
          <Nav email={localStorage.email} logOut={logOut} authorized={true} />
          <h1>We Love Anime Here</h1>
          <NavLink to="/data">
            <Button variant="warning">Data</Button>
          </NavLink>
        </div>
      ) : (
        <div>Loading.....</div>
      )}
    </div>
  );
};

export default Home;
