import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Card } from "react-bootstrap";
import CustomerDetailsPage from "./CustomerDetailsPage";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("customerName");
    navigate("/");
  };
  const customerName = sessionStorage.getItem("customerName");
  const isCustomerDetailsPage =
    window.location.pathname.includes("customer-details");

  return (
    <div
      className="Customer-background"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-vector/light-background-text-template-with-light-circles-abstraction-is-blue-with-pink_586153-21.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "75px",
      }}
    >
      <div className="main-content1">
        {!isCustomerDetailsPage && (
          <>
            <Card className="mt-4">
              <Card.Header>Featured Offers</Card.Header>
              <Card.Body>
                <Card.Title>Special Discounts for You</Card.Title>
                <Card.Text>
                  Check out our latest offers and discounts tailored just for
                  you!
                </Card.Text>
                <Link to="/special-offers" className="btn btn-primary">
                  View Offers
                </Link>
              </Card.Body>
            </Card>
            <Card className="mt-4">
              <Card.Header>Upcoming Events</Card.Header>
              <Card.Body>
                <Card.Title>Join Us for Exciting Events</Card.Title>
                <Card.Text>
                  Stay updated on our upcoming events and participate in
                  exclusive workshops, seminars, and more!
                </Card.Text>
                <Link to="/events" className="btn btn-primary">
                  View Events
                </Link>
              </Card.Body>
            </Card>
          </>
        )}
        <Navbar bg="light" expand="lg" fixed="top" className="fixed-top navbar">
          <Navbar.Brand
            as={Link}
            to="/customer-dashboard"
            className="navbar-brand"
          >
            Customer Dashboard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                as={Link}
                to="/customer-dashboard/customer-details"
                className="nav-link"
              >
                Customer Details
              </Nav.Link>
              <Nav.Link onClick={handleLogout} className="nav-link">
                Logout
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              {customerName && `Welcome ${customerName}!!`}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Container className="content1" style={{ paddingTop: "30px" }}>
          <Routes>
            <Route path="customer-details" element={<CustomerDetailsPage />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
};

export default CustomerDashboard;
