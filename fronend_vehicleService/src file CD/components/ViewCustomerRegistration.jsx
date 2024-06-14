import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
const ViewAllCustomerDetails = () => {
  const [customerDetails, setCustomerDetails] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/getAllCustomerDetails"
        );
        if (response.data.error) {
          setError("Error fetching customer details.");
        } else {
          setCustomerDetails(response.data.data);
        }
      } catch (error) {
        setError("Error fetching customer details.");
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomerDetails();
  }, []);

  return (
    <div className="customer-details-background">
      <div className="customer-details-container">
        <h2>All Customer Details</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Customer Registration ID</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>VehicleNumber</th>
            </tr>
          </thead>
          <tbody>
            {customerDetails.map((customer) => (
              <tr key={customer.customerRegId}>
                <td>{customer.customerRegId}</td>
                <td>{customer.customerName}</td>
                <td>{customer.customerEmail}</td>
                <td>{customer.vehicleNumber}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewAllCustomerDetails;
