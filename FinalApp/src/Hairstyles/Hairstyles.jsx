import React, { useState } from "react";
import "./Hairstyles.css";

const Hairstyles = () => {
  const [hairstylesData, setHairstylesData] = useState([
    { id: 1, name: "Textured Quiff", image: "/assets/hairstyles/textured-quiff.jpg" },
    { id: 2, name: "Undercut Fade", image: "/assets/hairstyles/undercut-fade.jpg" },
    { id: 3, name: "Slicked Back Pompadour", image: "/assets/hairstyles/slicked-back-pompadour.jpg" },
    { id: 4, name: "High Skin Fade with Crop", image: "/assets/hairstyles/high-skin-fade-crop.jpg" },
    { id: 5, name: "Messy Textured Top", image: "/assets/hairstyles/messy-textured-top.jpg" },
    { id: 6, name: "Tapered Crew Cut", image: "/assets/hairstyles/tapered-crew-cut.jpg" },
    { id: 7, name: "Disconnected Undercut", image: "/assets/hairstyles/disconnected-undercut.jpg" },
    { id: 8, name: "Modern Faux Hawk", image: "/assets/hairstyles/modern-faux-hawk.jpg" },
    { id: 9, name: "Low Bald Fade with Curls", image: "/assets/hairstyles/low-bald-fade-curls.jpg" },
  ]);

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (id) => {
    const selectedHairstyle = hairstylesData.find((hairstyle) => hairstyle.id === id);

    // Check if the item is not already in favorites
    if (!favorites.some((favorite) => favorite.id === selectedHairstyle.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, selectedHairstyle]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== id));
  };

  return (
    <div className="hairstyles-container">
      <h1 className="hairstyles-title">Explore Modern Men's Hairstyles</h1>
      <div className="hairstyles-grid">
        {hairstylesData.map((hairstyle) => (
          <div key={hairstyle.id} className="hairstyle-card">
            <img src={hairstyle.image} alt={hairstyle.name} className="hairstyle-image" />
            <p className="hairstyle-name">{hairstyle.name}</p>
            <button onClick={() => addToFavorites(hairstyle.id)}>Add to Favorites</button>
          </div>
        ))}
      </div>

      <div className="favorites-section">
        <h2>Favorites</h2>
        <div className="favorites-grid">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="favorite-card">
              <img src={favorite.image} alt={favorite.name} className="favorite-image" />
              <p className="favorite-name">{favorite.name}</p>
              <button onClick={() => removeFromFavorites(favorite.id)}>Remove from Favorites</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hairstyles;
