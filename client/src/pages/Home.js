import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "react-bootstrap/Button";
import bgImage from "../assets/naruto-uzumaki-5k-5120x2880-10669.jpg";

const Home = () => {
  const navigate = useNavigate();
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
    <div
      style={{
        height: "100vh",
        color: "yellow",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "140vh",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      {isLoggedIn ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            color: "yellow",
          }}
        >
          <Nav
            navColor="warning"
            email={localStorage.email}
            logOut={logOut}
            authorized={true}
          />
          <div
            style={{
              margin: "100px",
              textAlign: "center",
            }}
          >
            <h1>Welcome to AnimeList!</h1>
            <p
              style={{
                marginTop: "40px",
                textAlign: "center",
              }}
            >
              Unlock the captivating world of anime and dive into a realm of
              imagination, adventure, and endless excitement. Whether you're a
              seasoned otaku or just beginning to explore the vast universe of
              anime, AnimeStats is your ultimate destination for comprehensive
              and up-to-date information on all your favorite shows. As you
              embark on this incredible journey, our website offers you a
              gateway to a wealth of statistics and insights. However, before
              you can fully immerse yourself in the vast treasure trove of anime
              data, we kindly invite you to log in to gain access to our
              exclusive features and unlock a world of limitless possibilities.
              Once you're inside, you'll be greeted with a meticulously curated
              collection of statistics, facts, and rankings about the most
              famous and beloved anime series. From the number of episodes to
              character profiles, from fan ratings to box office records,
              AnimeStats is your go-to resource for in-depth analysis and
              captivating trivia about the shows that have captured the hearts
              of millions. Whether you're seeking recommendations for your next
              binge-watch, comparing the popularity of different series, or
              simply looking to satisfy your insatiable curiosity about the
              world of anime, AnimeStats has got you covered. With our intuitive
              interface and user-friendly design, navigating through the vast
              landscape of anime statistics has never been easier. So, what are
              you waiting for? Create your account or log in now and unlock a
              whole new dimension of anime exploration. Join a vibrant community
              of fellow enthusiasts, stay informed about the latest releases and
              trends, and embark on an unforgettable anime adventure with
              AnimeStats. Remember, the world of anime awaits you, and
              AnimeStats is your passport to this captivating realm. Welcome
              aboard, and let the exploration begin!
            </p>
            <div style={{ marginTop: "140px" }}>
              <NavLink to="/data">
                <Button variant="outline-warning" size="lg">
                  <h4 style={{ padding: "20px" }}>Click to View Anime Data</h4>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading.....</div>
      )}
    </div>
  );
};

export default Home;
