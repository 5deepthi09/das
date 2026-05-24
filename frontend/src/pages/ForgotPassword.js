import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Please enter your email");
      setMessage("");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Enter valid email");
      setMessage("");
      return;
    }

    // ✅ Success (dummy)
    setError("");
    setMessage("Reset link sent to your email 📩");
  };

  return (
    <div className="fp-container">
      <div className="fp-box">

        {/* 🔙 Back Button */}
        <Link to="/login" className="back-btn">←</Link>

        <h2>Forgot Password</h2>

        {/* Messages */}
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSubmit}>Send Reset Link</button>

        <p className="login-link">
          Remember password? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default ForgotPassword;