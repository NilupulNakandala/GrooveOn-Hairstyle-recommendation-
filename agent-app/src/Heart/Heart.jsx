import React from "react";
import "./Heart.css";
import heart from "/public/assets/heart/heart1.png";
import thelongfrindge from "/public/assets/heart/thelongfrindge.jpg";
import butchcut from "/public/assets/heart/butchcut.jpg";
import buzzcut from "/public/assets/heart/buzzcut.jpg";
import longhairsidepart from "/public/assets/heart/longhairsidepart.jpg";

const Heart = () => {
  return (
    <div>
      <div className="jumbotron mt-3">
        <h1 className="display-4"> Your Face is Heart Shape</h1>
      </div>
      <div className="heart-container">
        <div className="heart-top-cart">
          <div className="cart">
            <img src={heart} alt="heart1"/>
          </div>
          <div className="cart text-cart">
            <p>Face Strongly taper towards chin. Chin tend to be pointy.Forehead maybe a prominent feature</p>
          </div>
        </div>
        <div className="heart-bottom-carts">
          <h1>Recommended Hairstyles </h1>
          <div className="row">
            <div className="col">
              <div className="cart">
                <img src={thelongfrindge} alt="thelongfrindge"/>
                <p>The Long Frindge</p>
              </div>
            </div>
            <div className="col">
              <div className="cart">
                <img src={butchcut} alt="butchcut"/>
                <p>Butchcut</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="cart">
                <img src={buzzcut} alt="buzzcut"/>
                <p>Buzzcut</p>
              </div>
            </div>
            <div className="col">
              <div className="cart">
                <img src={longhairsidepart} alt="longhairsidepart"/>
                <p>Long hair sidepart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heart;
