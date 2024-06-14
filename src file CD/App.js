import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AdminDashboard from "./components/AdminDashboard";
import CustomerDashboard from "./components/CustomerDashboard";
import AboutUs from "./components/AboutUs";
import NavigationBar from "./components/Navbar";
import RegistrationPage from "./components/Registration";
import LoginPage from "./components/Login";
import AdminLoginPage from "./components/AdminLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Home.css";
import "./Styles/Navbar.css";
import "./Styles/ServiceDetails.css";
import "./Styles/AboutUs.css";
//import "./Styles/Registration.css";
import "./Styles/AdminDashboard.css";
import "./Styles/Login.css";
import "./Styles/AdminLogin.css";
//import "./Styles/CustomerDashboard.css";
import "./Styles/Vehicle.css";
//import "./Styles/ViewBookingC.css";
//import "./Styles/ViewServiceCustomer.css";
//import "./Styles/ViewVehicleCustomer.css";
import "./Styles/Vehicle.css";
import "./Styles/ServiceDetails.css";
import "./Styles/ViewBookings.css";
import "./Styles/Booking.css";
import "./Styles/ViewServiceDetails.css";
import "./Styles/ViewVehicle.css";
import "./Styles/ViewCustomer.css";
function App() {
  return (
    <Router>
      <NavigationBar />
      <div style={{ paddingTop: "56px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/registration-page" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/customer-dashboard/*" element={<CustomerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
