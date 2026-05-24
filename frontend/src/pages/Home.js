import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
function Home() {
  return (
    <div className="home-container">
  <Navbar />
      <h1 className="title"> Appointment booking System</h1>

      <p className="description">
        Welcome to our online appointment system. You can easily book doctor
        appointments, manage your visits, and stay updated with healthcare
        services.
      </p>

      {/* Services Section */}
      <div className="section">
        <h2>Our Services</h2>

        <div className="card-container">
          <div className="card">General Checkup</div>
          <div className="card">Dental Care</div>
          <div className="card">Cardiology</div>
          <div className="card">Pediatrics</div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="section">
        <h2>Featured Doctors</h2>

        <div className="card-container">
          <div className="card">
            <h3>Dr. Anjali</h3>
            <p>Dentist</p>
          </div>

          <div className="card">
            <h3>Dr. Ramesh</h3>
            <p>Cardiologist</p>
          </div>

          <div className="card">
            <h3>Dr. Kumar</h3>
            <p>General Physician</p>
          </div>
        </div>
      </div>

      {/* Health Tips */}
      <div className="section">
        <h2>Health Tips</h2>

        <ul className="tips">
          <li>Drink at least 8 glasses of water daily</li>
          <li>Exercise regularly</li>
          <li>Get enough sleep</li>
          <li>Schedule regular health checkups</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="section contact">
        <h2>Contact Us</h2>

        <p>Phone: +91 9876543210</p>
        <p>Email: hospital@gmail.com</p>
        <p>Location: Hyderabad</p>
      </div>

    </div>
  );
}

export default Home;