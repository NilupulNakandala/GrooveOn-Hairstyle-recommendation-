import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-us">
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
            <h1> Discover Your Perfect Look with GrooveON</h1>
            <p>At GrooveON, we believe that your hairstyle is a reflection of your personality and style. Our advanced AI-driven platform combines the latest in machine learning technology with the art of hairstyling to bring you a personalized and transformative experience..</p>
            <p>Our mission is to empower individuals to confidently embrace a hairstyle that enhances their natural features and expresses their unique identity. Whether you're looking for a bold change or a subtle update, GrooveON is your go-to destination for personalized hairstyling recommendations.</p>
            <p> How does it work? Simply upload a photo of your face, and let our intelligent system analyze your facial features to recommend hairstyles tailored just for you. Say goodbye to indecision and hello to a newfound confidence in your hairstyle choices.</p>
            <p>Join us at GrooveON and embark on a journey of self-expression through the art of hairstyling. Your perfect look awaits!</p>
        </div>
    );
};

export default About;