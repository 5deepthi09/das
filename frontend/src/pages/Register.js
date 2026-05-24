import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      alert(data.message);

      if (data.success) {
        navigate("/login");
      }
    } catch (err) {
  console.error("FULL ERROR:", err);
  alert(err.message);
}
  };

  return (
    <div className="register-container">
  <div className="register-card">
    {/* Back button */}
    <div className="back-button" onClick={() => navigate(-1)}>
      ←
    </div>

    <h2>Register</h2>

    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Register</button>
    </form>

    <p>
      Already have an account?{" "}
      <span
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => navigate("/login")}
      >
        Login
      </span>
    </p>
  </div>
</div>
  )
}