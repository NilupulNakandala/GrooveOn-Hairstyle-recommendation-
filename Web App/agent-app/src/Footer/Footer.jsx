import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
  
    setEmail("");
  };

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
                  href="https://www.facebook.com/profile.php?id=61553568625908"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://twitter.com/chenuwik55301"
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
                <span className="text-muted">GrooveON.com</span>
              </li>
              <li className="nav-item mb-2">
                <span className="text-muted">0777619245</span>
              </li>
              <li className="nav-item mb-2">
                <span className="text-muted">0712114556</span>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Address</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <span className="text-muted">
                  32 Halanduruwa Road / Malabe/ Ragama 10115
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form onSubmit={handleSubmit}>
              <p>
                Stay Updated with GrooveON
                Newsletter!
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                />

                <button type="button" className="btn btn-primary">
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
