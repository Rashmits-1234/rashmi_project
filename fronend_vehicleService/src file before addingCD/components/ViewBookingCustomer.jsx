import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewBookingDetailsC = () => {
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const customerRegId = sessionStorage.getItem("customerRegId");

        if (customerRegId && !isNaN(parseInt(customerRegId))) {
          const response = await axios.get(
            `http://localhost:8080/api/getbookingdetails/${customerRegId}`
          );

          if (
            response.data &&
            response.data.error === false &&
            response.data.data.length > 0
          ) {
            setBooking(response.data.data[0]);
            setError(response.data.message);
          } else {
            setError("No booking details found.");
          }
        } else {
          setError("Invalid customer registration ID.");
        }
      } catch (error) {
        setError("There was an error fetching the booking details!");
        console.error("Error fetching booking details:", error);
      }
    };

    fetchBookingDetails();
  }, []);

  return (
    <>
      <div className="booking-background">
        <div className="booking-details-container">
          <h1 className="heading-of-view-booking-details">
            Your Booking Details
          </h1>
          {error && <p>{error}</p>}
          {booking && (
            <p>Your service is scheduled for {booking.bookingDate}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewBookingDetailsC;
