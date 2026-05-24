import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Import all pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Book from "./pages/Book";
import Appointments from "./pages/Appointments";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import ThankYou from "./pages/Thankyou";

// 🔥 Layout to control Navbar
function Layout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/", "/login", "/register", "/forgot-password"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book" element={<Book />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </>
  );
}
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
