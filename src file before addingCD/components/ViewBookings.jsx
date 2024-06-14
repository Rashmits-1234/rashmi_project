import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const ViewAllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/getAllBooking"
        );
        if (!response.data.error) {
          setBookings(response.data.data);
          setError("");
        } else {
          setError("Error fetching bookings. Please try again.");
        }
      } catch (error) {
        setError("Error fetching bookings. Please try again.");
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="view-bookings" style={{ marginTop: "100px" }}>
      <h2>View All Bookings</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Booking Date</th>
            <th>Customer Registration ID</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.bookingId}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.customerRegId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewAllBookings;
