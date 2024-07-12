
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 GrooveON St.</p>
          <p>Music City, 45678</p>
        </div>
        <div className="footer-section">
          <h4>Contact Details</h4>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@grooveon.com</p>
        </div>
        <div className="footer-section">
          <h4>Subscribe to our Newsletter</h4>
          <form className="footer-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-input"
            />
            <button type="submit" className="footer-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
