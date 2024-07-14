import React, { useState } from 'react';
import './Recommendation.css';

const Recommendation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) return;

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Placeholder recommendations
      setRecommendations([
        "Short bob cut",
        "Long layered hair",
        "Pixie cut with side-swept bangs"
      ]);
    } catch (error) {
      console.error("Error getting recommendations:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Recommendation">
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
    
    <div className="image-upload-container">
      <h2>Upload Your Image for Hair Recommendations</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          className="file-input"
        />
        {selectedImage && (
          <div className="image-preview">
            <img src={selectedImage} alt="Preview" />
          </div>
        )}
        <button type="submit"  disabled={!selectedImage || isLoading}>
          {isLoading ? 'Getting Recommendations...' : 'Get Recommendations'}
        </button>
      </form>
      {recommendations.length > 0 && (
        <div className="recommendations">
          <h3>Recommended Hairstyles:</h3>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default Recommendation;