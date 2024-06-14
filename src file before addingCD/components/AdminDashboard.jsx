import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import VehicleRegistrationForm from "./Vehicle";
import ServiceForm from "./ServiceDetails";
import BookingForm from "./BookingForm";
import ViewAllVehicleDetails from "./Viewvehicle";
import ViewServiceDetails from "./ViewService";
import ViewAllBookings from "./ViewBookings";
import ViewAllCustomerDetails from "./ViewCustomerRegistration";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to="/admin">
          Admin Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/admin/vehicle-registration">
              Vehicle Registration
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/add-service-details">
              Service Form
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/add-booking">
              Booking Form
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/view-vehicle-history">
              View Vehicle History
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/view-service-details">
              View Service Details
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/view-bookings">
              View Bookings
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/view-customer-details">
              View CustomerDetails
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content" style={{ paddingTop: "56px" }}>
        <Routes>
          <Route
            path="vehicle-registration"
            element={<VehicleRegistrationForm />}
          />
          <Route path="add-service-details" element={<ServiceForm />} />
          <Route path="add-booking" element={<BookingForm />} />
          <Route
            path="view-vehicle-history"
            element={<ViewAllVehicleDetails />}
          />
          <Route path="view-service-details" element={<ViewServiceDetails />} />
          <Route path="view-bookings" element={<ViewAllBookings />} />
          <Route
            path="view-customer-details"
            element={<ViewAllCustomerDetails />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
