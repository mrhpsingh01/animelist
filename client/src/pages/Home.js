import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function validateToken() {
      const req = await fetch("http://localhost:1337/api/home", {
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
        window.location.href = "/";
      }
    }

    validateToken();
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    alert("Logout successful");
    window.location.href = "/";
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
