 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Book.css";

function Appointments() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fetch appointments
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Delete appointment (FIXED API)
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/appointments/${id}`, {
        method: "DELETE",
      });

      // Update UI instantly
      setData((prev) =>
        prev.filter((item) => item._id !== id)
      );

    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  // ✅ FIXED: use patientName (matches DB)
  const filtered = data.filter((item) =>
    item.patientName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="glass-card">
        <h1>🏥 Appointments</h1>

        <div className="top-bar">
          <input
            type="text"
            placeholder="🔍 Search patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span>Total: {filtered.length}</span>
        </div>

        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <tr key={item._id}>
                  {/* ✅ FIXED HERE */}
                  <td>{item.patientName}</td>

                  <td>
                    <span className="doctor">{item.doctor}</span>
                  </td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>
                    <span className="status">Scheduled</span>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item._id)}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No appointments found</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Appointments;