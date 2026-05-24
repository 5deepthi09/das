import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

function Index(){

 return(

  <div>

   {/* Hero Section */}

   <div className="hero">

    <h1>Welcome to GSMR Hospitals</h1>


    <div className="buttons">
     <Link to="/login">
      <button>Login</button>
     </Link>

     <Link to="/register">
      <button>Register</button>
     </Link>
    </div>

   </div>


   {/* Features Section */}

   <div className="features">

    <div className="feature-card">
     <img src="https://cdn-icons-png.flaticon.com/512/2966/2966484.png" alt="doctor"/>
     <h3>Expert Doctors</h3>
     <p>Experienced and qualified specialists.</p>
    </div>

    <div className="feature-card">
     <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" alt="appointment"/>
     <h3>Easy Booking</h3>
     <p>Book appointments quickly online.</p>
    </div>

    <div className="feature-card">
     <img src="https://cdn-icons-png.flaticon.com/512/2785/2785819.png" alt="care"/>
     <h3>24/7 Care</h3>
     <p>Healthcare services anytime you need.</p>
    </div>

   </div>


   {/* Footer */}

   <footer className="footer">

    <div className="footer-content">

     <div>
      <h3>GSMR Hospitals</h3>
      <p>Your trusted healthcare partner.</p>
     </div>

     <div>
      <h4>Contact</h4>
      <p>Phone: +91 9876543210</p>
      <p>Email: gsmrhospitals@gmail.com</p>
     </div>

     <div>
      <h4>Address</h4>
      <p>Hyderabad, Telangana</p>
      <p>India</p>
     </div>

    </div>

    <p className="copyright">
     © 2026 GSMR Hospitals
    </p>

   </footer>

  </div>
  




 );

}

export default Index;

