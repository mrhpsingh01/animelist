import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.png";

function Nav(props) {
  return (
    <Navbar bg="warning">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Anime
        </Navbar.Brand>
        {props.authorized ? (
          <Navbar.Collapse className="justify-content-end">
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
      </Container>
    </Navbar>
  );
}

export default Nav;
