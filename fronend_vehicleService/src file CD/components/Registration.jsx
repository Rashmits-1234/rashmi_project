import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValidationErrors({});

    if (
      !customerName ||
      !customerEmail ||
      !customerPassword ||
      !customerPhoneNumber ||
      !customerAddress ||
      !customerCity ||
      !vehicleNumber
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

    if (!isValidPhoneNumber(customerPhoneNumber)) {
      setValidationErrors({
        ...validationErrors,
        customerPhoneNumber: "Invalid phone number.",
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
          vehicleNumber,
        }
      );

      console.log("Success:", response.data);

      resetForm();
    } catch (error) {
      setErrorMessage("Customer already exists");
      console.error("Error:", error);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    return /^[0-9]{10}$/.test(phoneNumber);
  };

  const resetForm = () => {
    setCustomerName("");
    setCustomerPassword("");
    setCustomerEmail("");
    setCustomerPhoneNumber("");
    setCustomerAddress("");
    setCustomerCity("");
    setVehicleNumber("");

    setErrorMessage("");
    setValidationErrors({});
  };

  return (
    <div className="registration-background">
      <div className="registration-container">
        <h2>Registration</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="formBasicName">
            <Form.Label className="form-label">Name</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder="Enter name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control
              className="form-control"
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

          <Form.Group as={Col} controlId="formBasicPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              className="form-control"
              type="password"
              placeholder="Password"
              value={customerPassword}
              onChange={(e) => setCustomerPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicPhoneNumber">
            <Form.Label className="form-label">Phone Number</Form.Label>
            <Form.Control
              className="form-control"
              type="tel"
              placeholder="Enter phone number"
              value={customerPhoneNumber}
              onChange={(e) => setCustomerPhoneNumber(e.target.value)}
              isInvalid={!!validationErrors.customerPhoneNumber}
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.customerPhoneNumber}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicAddress">
            <Form.Label className="form-label">Address</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder="Enter address"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicCity">
            <Form.Label className="form-label">City</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder="Enter city"
              value={customerCity}
              onChange={(e) => setCustomerCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicVehicleNumber">
            <Form.Label className="form-label">Vehicle Number</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder="Enter vehicle number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </Form.Group>

          <Button className="btn-primary" variant="primary" type="submit">
            Register
          </Button>
        </Form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>
          Already an existing user? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
