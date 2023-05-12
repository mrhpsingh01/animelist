import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.png";

function Nav(props) {
  return (
    <Navbar bg={props.navColor}>
      <Navbar.Brand href="/home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        AnimeList
      </Navbar.Brand>
      {props.authorized ? (
        <Navbar.Collapse
          className="justify-content-end"
          style={{ color: "black" }}
        >
          {props.email}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={props.logOut}>
            Logout
          </Button>
        </Navbar.Collapse>
      ) : (
        <Navbar.Collapse className="justify-content-end">
          <NavLink to="/login">Login</NavLink>|||||
          <NavLink to="/register">Register</NavLink>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}

export default Nav;
