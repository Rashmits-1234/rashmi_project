import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import ViewBookingDetailsC from "./ViewBookingCustomer";
import ViewServiceDetailsC from "./ViewServiceCustomer";
import ViewVehicleDetailsC from "./ViewvehicleCustomer";

const CustomerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("customerEmail");
    navigate("/");
  };
  return (
    <div className="Customer-background">
      <Navbar bg="light" expand="lg" fixed="top" className="fixed-top">
        <Navbar.Brand as={Link} to="/">
          Customer Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/customer-dashboard/service-details">
              View Service Details
            </Nav.Link>
            <Nav.Link as={Link} to="/customer-dashboard/vehicle-details">
              View Vehicle Details
            </Nav.Link>
            <Nav.Link as={Link} to="/customer-dashboard/bookings">
              View Bookings
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content1">
        <Routes>
          <Route path="bookings" element={<ViewBookingDetailsC />} />
          <Route path="service-details" element={<ViewServiceDetailsC />} />
          <Route path="vehicle-details" element={<ViewVehicleDetailsC />} />
        </Routes>
      </div>
    </div>
  );
};

export default CustomerDashboard;
