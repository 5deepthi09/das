import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2 className="logo">🏥 Hospital</h2>

      <div className="links">
        <Link to="/">   Home</Link>
        <Link to="/book">            Book</Link>
        <Link to="/appointments">   Appointments</Link>
        <Link to="/dashboard">   Dashboard</Link>

        <button onClick={handleLogout} className="logout-btn">
                                 🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;