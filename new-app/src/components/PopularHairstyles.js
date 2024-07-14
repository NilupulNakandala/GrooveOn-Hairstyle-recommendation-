import React from 'react';
import './PopularHairstyles.css';

import hair1 from '../img/hair1.jpg';
import hair2 from '../img/hair2.jpg';
import hair3 from '../img/hair3.jpg';
import hair4 from '../img/hair4.jpeg';
import hair5 from '../img/hair5.jpeg';
import hair6 from '../img/hair6.jpeg';
import hair7 from '../img/hair7.jpeg';
import hair8 from '../img/hair8.jpeg';



const hairstyles = [
  {
    id: 1,
    name: "Classic Bob",
    image: hair1,
    description: "A timeless short to medium-length cut that falls between the ear and just above the shoulders."
  },
  {
    id: 2,
    name: "Long Layers",
    image: hair2,
    description: "Long hair cut in layers to add volume and movement, perfect for those with thicker hair."
  },
  {
    id: 3,
    name: "Pixie Cut",
    image: hair3,
    description: "A short hairstyle that's cropped close to the head, often with longer pieces on top."
  },
  {
    id: 4,
    name: "Beach Waves",
    image: hair4,
    description: "Tousled, textured waves that give a relaxed, just-off-the-beach look."
  },
  {
    id: 5,
    name: "Sleek Straight",
    image: hair5,
    description: "Smooth, straight hair that's shiny and frizz-free, suitable for any length."
  },
  {
    id: 6,
    name: "Textured Crop",
    image: hair6,
    description: "A short, choppy cut with lots of texture, popular for both men and women."
  },
  {
    id: 7,
    name: "The Bold and Dapper",
    image: hair7,
    description: "High fade on the sides and back with a distinct shaved part for a sharp and defined look."
  },
  {
    id: 8,
    name: "Box Fade",
    image: hair8,
    description: "Keeps the sides clean and close to the skin, while more weight is kept on top, allowing for a fuller and tighter curl."
  },
];

const PopularHairstyles = () => {
  return (
    <div className="Popular">
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
                <a href="/Contact ">Contact US</a>
               
            </div>
        </nav>
   

    <div className="popular-hairstyles">
      <h1>Popular Hairstyles</h1>
      <div className="hairstyle-grid">
        {hairstyles.map((style) => (
          <div key={style.id} className="hairstyle-card">
            <img src={style.image} alt={style.name} />
            <h3>{style.name}</h3>
            <p>{style.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PopularHairstyles;