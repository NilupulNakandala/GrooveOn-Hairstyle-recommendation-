import React from 'react';
import './Home.css';
import ImageSlider from './ImageSlider';
import hair1 from '../img/hair1.jpg';
import hair2 from '../img/hair2.jpg';
import hair3 from '../img/hair3.jpg';


const Home = () => {

  const images = [hair1, hair2, hair3];
  

  return (
    <div className="home">
      <h1>Welcome to GrooveON</h1>
      <p>Your Ultimate Destination for Perfect Hairstyles. Explore the latest trends, find your ideal look, and transform your appearance with just a scan.</p>
      <p>Ready for a new hairstyle? Start your journey with GrooveON today.</p>
      
      <ImageSlider images={images} />
    </div>
  );
};

export default Home;
