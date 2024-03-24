import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navbar open/close
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Navigation bar container
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Brand/logo */}
        <h4>GrooveON</h4>

        {/* Navbar toggler button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          {/* Navbar links */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/cameraPage">
                Recommendations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/hairstyles">
                Popular Hairstyles
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">
                Contact Us
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/review">
                Review
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
