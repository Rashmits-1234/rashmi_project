import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
const ViewServiceDetails = () => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    serviceId: "",
    serviceDescription: "",
    packageName: "",
    packageCost: "",
    customerRegId: "",
  });

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/serviceDetails"
        );
        if (response.data.error) {
          setError("Error fetching service details.");
        } else {
          setServiceDetails(response.data.data);
        }
      } catch (error) {
        setError("Error fetching service details.");
        console.error("Error fetching service details:", error);
      }
    };

    fetchServiceDetails();
  }, []);

  const handleUpdate = (service) => {
    setFormData({
      serviceId: service.serviceId,
      serviceDescription: service.serviceDescription,
      packageName: service.packageName,
      packageCost: service.packageCost,
      customerRegId: service.customerRegId,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      serviceId: "",
      serviceDescription: "",
      packageName: "",
      packageCost: "",
      customerRegId: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:8080/api/service/update",
        formData
      );
      if (!response.data.error) {
        const updatedServiceDetails = serviceDetails.map((service) =>
          service.serviceId === formData.serviceId ? formData : service
        );
        setServiceDetails(updatedServiceDetails);
        setShowModal(false);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Error updating service.");
      console.error("Error updating service:", error);
    }
  };

  return (
    <div className="service-details-background">
      <div className="service-details-container">
        <h2>All Service Details</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Service ID</th>
              <th>Service Description</th>
              <th>Package Name</th>
              <th>Package Cost</th>
              <th>Vehicle Registration ID</th>
              <th>Customer Registration ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {serviceDetails.map((service) => (
              <tr key={service.serviceId}>
                <td>{service.serviceId}</td>
                <td>{service.serviceDescription}</td>
                <td>{service.packageName}</td>
                <td>{service.packageCost}</td>
                <td>{service.vehicleRegId}</td>
                <td>{service.customerRegId}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleUpdate(service)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Update Service Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="serviceDescription">
                <Form.Label>Service Description</Form.Label>
                <Form.Control
                  type="text"
                  name="serviceDescription"
                  value={formData.serviceDescription}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="packageName">
                <Form.Label>Package Name</Form.Label>
                <Form.Control
                  type="text"
                  name="packageName"
                  value={formData.packageName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="packageCost">
                <Form.Label>Package Cost</Form.Label>
                <Form.Control
                  type="number"
                  name="packageCost"
                  value={formData.packageCost}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="customerRegId">
                <Form.Label>Customer Registration ID</Form.Label>
                <Form.Control
                  type="text"
                  name="customerRegId"
                  value={formData.customerRegId}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ViewServiceDetails;
