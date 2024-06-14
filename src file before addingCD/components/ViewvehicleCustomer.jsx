// ViewVehicleDetailsC.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewVehicleDetailsC = () => {
  const [vehicle, setVehicle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const customerRegId = sessionStorage.getItem("customerRegId");

        if (customerRegId && !isNaN(parseInt(customerRegId))) {
          const response = await axios.get(
            `http://localhost:8080/api/getvehicledetails/${customerRegId}`
          );

          if (!response.data.error) {
            setVehicle(response.data.data[0]);
          } else {
            setError(response.data.message);
          }
        } else {
          setError("Invalid customer registration ID.");
        }
      } catch (error) {
        setError("There was an error fetching the vehicle details!");
        console.error("Error fetching vehicle details:", error);
      }
    };

    fetchVehicleDetails();
  }, []);

  return (
    <div>
      <h2>View Vehicle Details</h2>
      {error && <p>{error}</p>}
      {vehicle && (
        <div>
          <p>Vehicle Registration ID: {vehicle.vehicleRegId}</p>
          <p>Vehicle Model: {vehicle.vehicleModel}</p>
          <p>Vehicle Number: {vehicle.vehicleNo}</p>
        </div>
      )}
    </div>
  );
};

export default ViewVehicleDetailsC;
