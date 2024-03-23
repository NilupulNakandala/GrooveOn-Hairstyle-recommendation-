import React from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";

import one from "/public/assets/Home/hair3.jpg";
import two from "/public/assets/Home/hair2.jpg";

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Welcome to GrooveON!</h1>
        <p className="lead">
          Your Ultimate Destination for Perfect Hairstyles. Explore the latest trends, find your ideal look, and transform your appearance with just a scan.
        </p>
        <hr className="my-4" />
        <p>
          Ready for a new hairstyle? Start your journey with GrooveON today.
        </p>
        <a
          className="btn btn-primary btn-lg"
          href="./cameraPage"
          role="button"
          style={{ padding: "10px 16px", border: "none" }}
        >
          Get Recommendations
        </a>
      </div>
     <div>
      <h1 className=" word">Trending Hairstyles: </h1>
      <Carousel fade={true}>
        <Carousel.Item>
          <img className="d-block w-100" src={one} alt="Hairstyle Photo 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={two} alt="Hairstyle Photo 2" />
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
};

export default Home;
