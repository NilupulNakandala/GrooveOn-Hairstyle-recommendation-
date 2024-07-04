import React, { useState } from "react";
import "./Hairstyles.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap"; 

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
  const [addedToFavorite, setAddedToFavorite] = useState(null);

  const addToFavorites = (id) => {
    const selectedHairstyle = hairstylesData.find((hairstyle) => hairstyle.id === id);
    if (!favorites.some((favorite) => favorite.id === selectedHairstyle.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, selectedHairstyle]);
      setAddedToFavorite(id);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== id));
    setAddedToFavorite(null); // Reset addedToFavorite state when removing from favorites
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Explore Modern Men's Hairstyles</h1>
      <Row>
        {hairstylesData.map((hairstyle) => (
          <Col key={hairstyle.id} md={4} sm={6} xs={12} className="mb-3">
            <Card className="h-100">
              <Card.Img variant="top" src={hairstyle.image} alt={hairstyle.name} style={{ width: "355px", height: "355px" }} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="text-center">{hairstyle.name}</Card.Title>
                </div>
                <div className="text-center">
                  <Button
                    id="favorite"
                    onClick={() => addToFavorites(hairstyle.id)}
                    className="bg-orange"
                    disabled={addedToFavorite === hairstyle.id}
                  >
                    {addedToFavorite === hairstyle.id ? "Added to Favorites" : "Add to Favorites"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="favorites-section mt-4">
        <h2 className="text-center">Favorites</h2>
        <Row>
          {favorites.map((favorite) => (
            <Col key={favorite.id} md={4} sm={6} xs={12} className="mb-3">
              <Card className="h-100">
                <Card.Img variant="top" src={favorite.image} alt={favorite.name} style={{ width: "355px", height: "355px" }} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="text-center">{favorite.name}</Card.Title>
                  </div>
                  <div className="text-center">
                    <Button variant="danger" onClick={() => removeFromFavorites(favorite.id)} className="bg-orange">Remove from Favorites</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Hairstyles;
