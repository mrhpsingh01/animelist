import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import Data from "./pages/Data";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="register" element={<Register />} />
        <Route exact path="data" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
