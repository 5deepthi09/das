import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Appointments.css";

function BookAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  // Example doctor list with domains
  const doctors = [
    { name: "Dr. Rao", domain: "Cardiology" },
    { name: "Dr. Reddy", domain: "Neurology" },
    { name: "Dr. Priya", domain: "Dermatology" },
    { name: "Dr. Kumar", domain: "Orthopedics" },
  ];

  // Fetch existing appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("http://localhost:5000/appointments");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };
    fetchAppointments();
  }, []);

  // Book appointment with conflict check
  const handleBook = async () => {
    // Check if same doctor/date/time already exists
    const conflict = appointments.find(
      (appt) => appt.doctor === doctor && appt.date === date && appt.time === time
    );

    if (conflict) {
      alert("❌ This time slot is already booked with the doctor.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patientName, doctor, date, time }),
      });

      const result = await res.json();

      if (!res.ok || result.success === false) {
        alert(result.message || "Failed to book appointment");
        return;
      }

      alert("✅ Appointment booked successfully!");
      navigate("/appointments"); // redirect to appointments page
    } catch (err) {
      console.error("Booking error:", err);
      alert("Server error while booking appointment");
    }
  };

  return (
    <div className="main">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>

      <div className="glass-card">
        <h1>📅 Book Appointment</h1>

        <div className="form">
          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />

          {/* Doctor dropdown */}
          <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
            <option value="">Select Doctor</option>
            {doctors.map((doc) => (
              <option key={doc.name} value={doc.name}>
                {doc.name} ({doc.domain})
              </option>
            ))}
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button className="book-btn" onClick={handleBook}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
