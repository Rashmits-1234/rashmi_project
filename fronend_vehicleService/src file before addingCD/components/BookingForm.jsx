import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
const BookingForm = () => {
  const [formData, setFormData] = useState({
    customerRegId: "",
    bookingDate: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/booking/save",
        {
          customerRegId: parseInt(formData.customerRegId),
          booking: [
            {
              bookingDate: formData.bookingDate,
            },
          ],
        }
      );
      if (response.data.error) {
        setError("Error submitting form. Please try again.");
      } else {
        setSuccess("Booking details saved successfully!");
        setFormData({
          customerRegId: "",
          bookingDate: "",
        });
      }
    } catch (error) {
      setError("Error submitting form. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="booking-details" style={{ marginTop: "100px" }}>
      <h2>Booking Details</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="customerRegId">
          <Form.Label>Customer Registration ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter customer registration ID"
            name="customerRegId"
            value={formData.customerRegId}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="bookingDate">
          <Form.Label>Booking Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter booking date"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookingForm;
