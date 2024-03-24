import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Footer.css"; // Import custom CSS for the footer

const Footer = () => {
  // State for managing the email input
  const [email, setEmail] = useState("");

  // Handle email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission (simulated, as there's no API call)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(`Subscribed with email: ${email}`); // Log the submitted email
    setEmail(""); // Reset the form after submission
  };

  // Function to clear the email input (unused in this code)
  const handleClear = () => {
    setEmail("");
  };

  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://www.facebook.com"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://twitter.com/"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Twitter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.instagram.com"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Contact Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <span className="text-muted">Grooveon@gmail.com</span>
              </li>
              <li className="nav-item mb-2">
                <span className="text-muted">+94 77 761 9245</span>
              </li>
              <li className="nav-item mb-2">
                <span className="text-muted">+94 71 211 4556</span>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form onSubmit={handleSubmit}>
              <p>Stay Updated with GrooveON Newsletter!</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                />

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
