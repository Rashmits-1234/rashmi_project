import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewServiceDetailsC = () => {
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const customerRegId = sessionStorage.getItem("customerRegId");

        if (customerRegId && !isNaN(parseInt(customerRegId))) {
          const response = await axios.get(
            `http://localhost:8080/api/get/${customerRegId}`
          );

          if (!response.data.error) {
            setService(response.data.data);
          } else {
            setError(response.data.message);
          }
        } else {
          setError("Invalid customer registration ID.");
        }
      } catch (error) {
        setError("There was an error fetching the service details!");
        console.error("Error fetching service details:", error);
      }
    };

    fetchServiceDetails();
  }, []);

  return (
    <div className="service-background">
      <div className="service-details-container">
        <h1 className="heading-of-view-service-details">
          View Service Details
        </h1>
        {error && <p>{error}</p>}
        {service && (
          <div style={{ paddingTop: "0px", marginBottom: "1000px" }}>
            <p>Description: {service.serviceDescription}</p>
            <p>Package Name: {service.packageName}</p>
            <p>Package Cost: {service.packageCost}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewServiceDetailsC;
