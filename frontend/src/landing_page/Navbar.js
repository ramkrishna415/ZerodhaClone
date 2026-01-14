

import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); 
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    window.location.href = "/"; 
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom fixed-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to={token ? "/" : "/"}>
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
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
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           
            {token ? (
              <>
                {/* <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li> */}
                    <li className="nav-item">
                  <Link className="nav-link active" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/product">Product</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/pricing">Pricing</Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link active" to="/support">Support</Link>
                </li>
                <li className="nav-item">
                  <button 
                    className="nav-link active" 
                    onClick={handleLogout}
                    // style={{ borderRadius: "20px" }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup / Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
