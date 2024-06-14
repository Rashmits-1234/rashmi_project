import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
const ViewAllVehicleDetails = () => {
  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/getallvehicledetails"
        );
        if (response.data.error) {
          setError("Error fetching vehicle details.");
        } else {
          setVehicleDetails(response.data.data);
        }
      } catch (error) {
        setError("Error fetching vehicle details.");
        console.error("Error fetching vehicle details:", error);
      }
    };

    fetchVehicleDetails();
  }, []);

  return (
    <div className="vehicle-details-background">
      <div className="vehicle-details-container">
        <h2>All Vehicle Details</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Vehicle Reg ID</th>
              <th>Vehicle Model</th>
              <th>Vehicle Number</th>
              <th>Customer Reg ID</th>
            </tr>
          </thead>
          <tbody>
            {vehicleDetails.map((vehicle) => (
              <tr key={vehicle.vehicleRegId}>
                <td>{vehicle.vehicleRegId}</td>
                <td>{vehicle.vehicleModel}</td>
                <td>{vehicle.vehicleNo}</td>
                <td>{vehicle.customerRegId}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewAllVehicleDetails;
