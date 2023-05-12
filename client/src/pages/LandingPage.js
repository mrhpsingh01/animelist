import React from "react";
import Nav from "../components/Nav";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

import bgImage from "../assets/pxfuel.jpg";

function LandingPage() {
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
      <Nav navColor="warning" />
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
          anime, AnimeStats is your ultimate destination for comprehensive and
          up-to-date information on all your favorite shows. As you embark on
          this incredible journey, our website offers you a gateway to a wealth
          of statistics and insights. However, before you can fully immerse
          yourself in the vast treasure trove of anime data, we kindly invite
          you to log in to gain access to our exclusive features and unlock a
          world of limitless possibilities. Once you're inside, you'll be
          greeted with a meticulously curated collection of statistics, facts,
          and rankings about the most famous and beloved anime series. From the
          number of episodes to character profiles, from fan ratings to box
          office records, AnimeStats is your go-to resource for in-depth
          analysis and captivating trivia about the shows that have captured the
          hearts of millions. Whether you're seeking recommendations for your
          next binge-watch, comparing the popularity of different series, or
          simply looking to satisfy your insatiable curiosity about the world of
          anime, AnimeStats has got you covered. With our intuitive interface
          and user-friendly design, navigating through the vast landscape of
          anime statistics has never been easier. So, what are you waiting for?
          Create your account or log in now and unlock a whole new dimension of
          anime exploration. Join a vibrant community of fellow enthusiasts,
          stay informed about the latest releases and trends, and embark on an
          unforgettable anime adventure with AnimeStats. Remember, the world of
          anime awaits you, and AnimeStats is your passport to this captivating
          realm. Welcome aboard, and let the exploration begin!
        </p>
        <div>
          <div style={{ marginTop: "140px" }}>
            <NavLink to="/login">
              <Button variant="outline-warning" size="lg">
                <h4 style={{ paddingInline: "30px" }}>Click Here to Login</h4>
              </Button>
            </NavLink>
          </div>
          <div style={{ marginTop: "40px" }}>
            <NavLink to="/register">
              <Button variant="outline-warning" size="lg">
                <h4 style={{ paddingInline: "20px" }}>
                  Click Here to Register
                </h4>
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
