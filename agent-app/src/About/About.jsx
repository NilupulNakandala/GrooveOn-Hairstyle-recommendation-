import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <br />
      <br />
      <section className="about-section py-5 text-center container">
        <div className="row py-lg-1">
          <div className="col-lg-10 col-md-8 mx-auto">
            <h1 className="about-title fw-light">Welcome to GrooveON</h1>
            <br />
            <p className="lead fw-bold about-text">
              Discover Your Perfect Look with GrooveON
            </p>
            <br />
            <p className="about-text">
              At GrooveON, we believe that your hairstyle is a reflection of your personality and style. Our advanced AI-driven platform combines the latest in machine learning technology with the art of hairstyling to bring you a personalized and transformative experience.
            </p>
            <br />
            <p className="about-text">
              Our mission is to empower individuals to confidently embrace a hairstyle that enhances their natural features and expresses their unique identity. Whether you're looking for a bold change or a subtle update,GrooveON is your go-to destination for personalized hairstyling recommendations.
            </p>
            <br />
            <p className="about-text">
              How does it work? Simply upload a photo of your face, and let our intelligent system analyze your facial features to recommend hairstyles tailored just for you. Say goodbye to indecision and hello to a newfound confidence in your hairstyle choices.
            </p>
            <br />
            <p className="about-text">
              Join us at GrooveON and embark on a journey of self-expression through the art of hairstyling. Your perfect look awaits!
            </p>
            <br />
          </div>
        </div>
      </section>
      <br />
    </>
  );
};

export default About;
