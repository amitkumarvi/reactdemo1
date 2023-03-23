import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/About" class="nav-link">
                  About Us
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Contact" class="nav-link">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Login" class="nav-link">
                  Log In
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Signup" class="nav-link">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
