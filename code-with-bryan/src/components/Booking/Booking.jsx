import React, { useState, useEffect } from "react";
import Form from "../../pieces/Form/Form";
import { useParams } from "../../Context/Context";
import "./Booking.css";

export const Booking = () => {
  const { bookingRef } = useParams();

  return (
    <div className="booking-container" ref={bookingRef}>
      <div className="title--booking">
        <h2>BOOKING</h2>
        <br />
        <h1>Book a free session with me now!</h1>
      </div>
      <Form></Form>
    </div>
  );
};

export default Booking;
