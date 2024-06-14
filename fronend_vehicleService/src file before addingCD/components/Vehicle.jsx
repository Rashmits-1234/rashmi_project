import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const VehicleRegistrationForm = () => {
  const [formData, setFormData] = useState({
    customerRegId: '',
    vehicleModel: '',
    vehicleNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      customerRegId: formData.customerRegId,
      vehicleRegister: [
        {
          vehicleModel: formData.vehicleModel,
          vehicleNo: formData.vehicleNumber
        }
      ]
    };

    try {
      const response = await axios.post('http://localhost:8080/api/vehicleDetails/save', payload);
      console.log('Vehicle saved successfully:', response.data);
      setFormData({
        customerRegId: '',
        vehicleModel: '',
        vehicleNumber: ''
      });
    } catch (error) {
      console.error('Error saving vehicle details:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="service-details" style={{ marginTop: '100px' }}>
      <h1>Vehicle Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="customerRegId">
          <Form.Label>Customer Reg ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Customer Reg ID"
            name="customerRegId"
            value={formData.customerRegId}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="vehicleModel">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Vehicle Model"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="vehicleNumber">
          <Form.Label>Vehicle Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Vehicle Number"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
          />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default VehicleRegistrationForm;
