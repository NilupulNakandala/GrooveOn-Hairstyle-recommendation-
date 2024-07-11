import React from "react";
import "./Square.css";
import square from "/public/assets/square/square1.png";
import manbun from "/public/assets/square/manbun.jpg";
import pampadourhairstyle from "/public/assets/square/pampadourhairstyle.jpg";
import shortaffro from "/public/assets/square/shortaffro.jpg";
import classiccombover from "/public/assets/square/classiccombover.jpg";

const Square = () => {
  return (
    <div>
      <div className="jumbotron mt-3">
        <h1 className="display-4">Square Shape</h1>
      </div>
      <div className="square-container">
        <div className="square-top-cart">
          <div className="cart">
            <img src={square} alt="square1"/>
          </div>
          <div className="cart text-cart">
            <p>Forehead,cheekbones and jawline almost the same width.Sqaure and bony jawline is prominent feature</p>
          </div>
        </div>
        <div className="square-bottom-carts">
          <div className="row">
            <div className="col">
              <div className="cart">
                <img src={manbun} alt="manbun"/>
                <p>Manbun</p>
              </div>
            </div>
            <div className="col">
              <div className="cart">
                <img src={pampadourhairstyle} alt="pampadourhairstyle"/>
                <p>Pampadour Hairstyle</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="cart">
                <img src={shortaffro} alt="shortaffro"/>
                <p>Short Affro</p>
              </div>
            </div>
            <div className="col">
              <div className="cart">
                <img src={classiccombover} alt="classiccombover"/>
                <p>Classic Combover</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Square;
