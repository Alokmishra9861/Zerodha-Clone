import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is authenticated
 useEffect(() => {
  axios
    .get("http://localhost:3002/auth/check", { withCredentials: true })
    .then((res) => {
      if (res.data.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    })
    .catch(() => setUser(null));
}, []);

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0"; // Clear cookie
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2 d-flex justify-content-between align-items-center">
        
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to={"/"}>
          <img
            src="/Media/images/logo.svg"
            alt="logo_img"
            style={{ width: "100px", height: "auto" }}
          />
        </Link>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0 d-flex align-items-center gap-3">

            <li className="nav-item">
              <Link className="nav-link active" to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/products"}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/pricing"}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/support"}>Support</Link>
            </li>
            
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/login"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/signup"}>Signup</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hello, <strong>{user}</strong></span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-dark" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
