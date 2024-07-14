import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <nav className="navbar">
                <div className="nav-left">
                    <a href="/">Home</a>
                    
                    <a href="/Recommendation">Recommendations</a>
                    <a href="/PopularHairstyles">Popular Hairstyles</a>
                </div>
                <div className="nav-center">
                    <a href="/">GrooveOn</a>
                </div>
                <div className="nav-right">
                    <a href="/About">About US</a>
                    <a href="/Contact">Contact US</a>
                    
                </div>
            </nav>
            <main>
                <h1>Elevate Your HairStyle With Modern Technology</h1>
                <h3>Welcome to GrooveOn</h3>
            </main>
            
        </div>
    );
};

export default Home;