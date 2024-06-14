import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (adminEmail === "admin" && adminPassword === "admin1234") {
        alert("Admin login successful");
        navigate("/admin");
      } else {
        setErrorMessage("Invalid admin credentials");
      }
    }
    setValidated(true);
  };

  return (
    <div className="admin-login-background">
      <div className="login-container" style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Admin Login</h1>
        <Form noValidate validated={validated} onSubmit={handleAdminLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter username"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid username.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
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
      </div>
    </div>
  );
};

export default AdminLoginPage;
