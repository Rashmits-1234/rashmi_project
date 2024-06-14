import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">
        VBSP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about-us">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/registration-page">
            Customer Registration
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Customer Login
          </Nav.Link>
          <Nav.Link as={Link} to="/admin-login">
            Admin Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
