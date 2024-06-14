import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleCustomerLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const response = await axios.post("http://localhost:8080/api/login", {
          customerPassword: customerPassword,
          customerEmail: customerEmail,
        });
        console.log("Success:", response.data);
        if (!response.data.error) {
          alert("Customer login successful");
          navigate("/customer-dashboard");
          sessionStorage.setItem(
            "customerRegId",
            response.data.data.customerRegId
          );
          sessionStorage.setItem(
            "customerEmail",
            response.data.data.customerEmail
          );
          sessionStorage.setItem(
            "customerName",
            response.data.data.customerName
          );
        } else {
          setErrorMessage("Customer not found");
        }
      } catch (error) {
        setErrorMessage("An error occurred during login.");
        console.error("Error:", error);
      }
    }
    setValidated(true);
  };

  return (
    <div className="login-background">
      <div className="login-container" style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Customer Login</h1>
        <Form noValidate validated={validated} onSubmit={handleCustomerLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={customerPassword}
              onChange={(e) => setCustomerPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </Form>

        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <p>
          New User ? <Link to="/registration-Page">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
