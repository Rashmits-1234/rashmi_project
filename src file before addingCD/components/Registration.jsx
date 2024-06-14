import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !customerName ||
      !customerEmail ||
      !customerPassword ||
      !customerPhoneNumber ||
      !customerAddress ||
      !customerCity
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!isValidEmail(customerEmail)) {
      setValidationErrors({
        ...validationErrors,
        customerEmail: "Invalid email address.",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/customerRegistration/save",
        {
          customerName,
          customerPassword,
          customerEmail,
          customerPhoneNumber,
          customerAddress,
          customerCity,
        }
      );

      console.log("Success:", response.data);

      setCustomerName("");
      setCustomerPassword("");
      setCustomerEmail("");
      setCustomerPhoneNumber("");
      setCustomerAddress("");
      setCustomerCity("");
      setErrorMessage("");
      setValidationErrors({});
    } catch (error) {
      setErrorMessage("Customer already exists");
      console.error("Error:", error);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="registration-background">
      <div className="registration-container" style={{ marginTop: "100px" }}>
        <h2>Registration</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              isInvalid={!!validationErrors.customerEmail}
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.customerEmail}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={customerPassword}
              onChange={(e) => setCustomerPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              value={customerPhoneNumber}
              onChange={(e) => setCustomerPhoneNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={customerCity}
              onChange={(e) => setCustomerCity(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <p>
          Already an existing user? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
