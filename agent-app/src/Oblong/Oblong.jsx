import React from "react";
import "./Oblong.css";
import oblong from "/public/assets/oblong/oblong1.png";
import theivyleague from "/public/assets/oblong/theivyleague.jpg";
import modernspikes from "/public/assets/oblong/modernspikes.jpg";
import undercut from "/public/assets/oblong/undercut.jpg";
import classicsidepart from "/public/assets/oblong/classicsidepart.jpg";

const Oblong = () => {
  return (
    <div>
      <div className="jumbotron mt-3">
        <h1 className="display-4">Your Face Shape is Oblong Shape</h1>
      </div>
      <div className="oblong-container">
        <div className="oblong-top-cart">
          <div className="cart">
            <img src={oblong} alt="oblong1"/>
          </div>
          <div className="cart text-cart">
            <p>Face gracefully tapers towards chin. Wider Forehead.</p>
          </div>
        </div>
        <div className="oblong-bottom-carts">
           <h1>Recommended Hairsyles </h1>
          <div className="row">
            <div className="col">
              <div className="cart">
                <img src={theivyleague} alt="theivyleague"/>
                <p>The Ivy League</p>
              </div>
            </div>
            <div className="col">
              <div className="cart">
                <img src={modernspikes} alt="modernspikes"/>
                <p>Modern Spikes</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="cart">
                <img src={undercut} alt="undercut"/>
                <p>Undercut</p>
              </div>
            </div>
            <div className="col">
              <div className="cart">
                <img src={classicsidepart} alt="classicsidepart"/>
                <p>Classic Side Part </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oblong;
