import React from "react";
import { useNavigate } from "react-router-dom";
import "./Thankyou.css";

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="thank-container">
      <div className="thank-card">
        <h1>🎉 Appointment Booked!</h1>
        <p>Your appointment has been successfully scheduled.</p>

        <button onClick={() => navigate("/appointments")}>
          View Appointments
        </button>

        <button onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
}

export default ThankYou;