import React, { useState } from "react";
import axios from "axios";

const ServiceForm = () => {
  const [serviceDescription, setServiceDescription] = useState("");
  const [packageName, setPackageName] = useState("");
  const [packageCost, setPackageCost] = useState("");
  const [vehicleRegId, setVehicleRegId] = useState("");
  const [customerRegId, setCustomerRegId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceDetails = {
      customerRegId: parseInt(customerRegId),
      vehicleRegId: parseInt(vehicleRegId),
      serviceDetails: [
        {
          serviceDescription,
          packageName,
          packageCost: parseFloat(packageCost),
        },
      ],
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/serviceDetails/add",
        serviceDetails
      );
      if (response.data.error === false) {
        setMessage("Service added successfully!");
        // Clear input fields after successful submission
        setServiceDescription("");
        setPackageName("");
        setPackageCost("");
        setVehicleRegId("");
        setCustomerRegId("");
      } else {
        setMessage("Error adding service. Please try again.");
      }
    } catch (error) {
      setMessage("Error adding service. Please try again.");
      setError(error.message);
      console.error("Error adding service:", error);
    }
  };

  return (
    <div className="service-form">
      <h2>Add Service Details</h2>
      {message && <p>{message}</p>}
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service Description:</label>
          <input
            type="text"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Package Name:</label>
          <input
            type="text"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Package Cost:</label>
          <input
            type="text"
            value={packageCost}
            onChange={(e) => setPackageCost(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Vehicle Registration ID:</label>
          <input
            type="text"
            value={vehicleRegId}
            onChange={(e) => setVehicleRegId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Customer Registration ID:</label>
          <input
            type="text"
            value={customerRegId}
            onChange={(e) => setCustomerRegId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default ServiceForm;
