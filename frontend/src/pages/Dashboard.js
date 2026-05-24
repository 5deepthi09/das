import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [time, setTime] = useState(new Date());
const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then(res => res.json())
      .then(data => setAppointments(data));
  }, []);

  // live time
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextAppointment = appointments[0];

  return (
    <div className="dashboard">
      <h1>       Hospital Dashboard</h1>
<button className="back-btn" onClick={() => navigate(-1)}>
  ⬅ Back
</button>
      <div className="welcome">
        <h2>Welcome 👋</h2>
        <p>Manage appointments and hospital activities easily.</p>
      </div>

      <div className="datetime">
        <p><b>Date:</b> {time.toLocaleDateString()}</p>
        <p><b>Time:</b> {time.toLocaleTimeString()}</p>
      </div>

      

      {/* Modern card-based quick actions */}
      <div className="dashboard-cards">
        <Link to="/book" className="card">
          <h3>📅 Book Appointment</h3>
          <p>Schedule a new hospital visit</p>
        </Link>

        <Link to="/appointments" className="card">
          <h3>📖 View Appointments</h3>
          <p>Check upcoming and past visits</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
