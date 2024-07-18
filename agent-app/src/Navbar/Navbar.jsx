import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "/public/assets/Home/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="GrooveON Logo"
            className="navbar-logo"
            style={{ width: '50px', height: '50px' }}
          />
          <h4 className="ml-2">GrooveON</h4>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
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

        <img
          src="/public/assets/Home/logo.png"
          alt="Small Picture"
          className="navbar-small-picture"
          style={{ width: '30px', height: '30px' }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
