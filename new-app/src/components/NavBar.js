import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="logo-container">
          <h3>GrooveON</h3>
        </div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/upload">Recommendations</a>
          <a href="/popular">Popular Hairstyles</a>
          <a href="#contact">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#contact">Review</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
