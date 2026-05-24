import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Enter valid email");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    // ✅ Success
    setError("");
    alert("Login Successful ✅");

    // 🔥 Redirect to Dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="login-container">
      <div className="login-box">

        {/* 🔙 Back Button */}
        <Link to="/" className="back-btn">←</Link>

        <h2>Login</h2>

        {/* Error Message */}
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <div className="login-links">
          <p><Link to="/forgot-password">Forgot Password?</Link></p>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>

      </div>
    </div>
  );
}

export default Login;