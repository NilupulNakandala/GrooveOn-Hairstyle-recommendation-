import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
        <nav className="navbar">
            <div className="nav-left">
                <a href="/Home">Home</a>
                <a href="/Recommendation">Recommendations</a>
                <a href="/PopularHairstyles">Popular Hairstyles</a>
            </div>
            <div className="nav-center">
                <a href="/">GrooveOn</a>
            </div>
            <div className="nav-right">
                <a href="/About">About US</a>
                <a href="/Contact ">Contact US</a>
               
            </div>
        </nav>
      <h1 className="oops">Oops!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
    </div>
  );
};

export default NotFound;