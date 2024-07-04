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
            <h1 className="about-title fw-light">About GrooveON</h1>
            <br />
            <p className="lead fw-bold about-text">
              Discover Your Perfect Look with GrooveON
            </p>
            <br />
            <div>
              <img src="/assets/aboutus/barber.jpg" alt="chibibarber" className="img-fluid mb-4" />
            </div>
            <p className="about-text">
              At GrooveON, we believe that your hairstyle is a reflection of your personality and style. Our advanced AI-driven platform combines the latest in machine learning technology with the art of hairstyling to bring you a personalized and transformative experience.
            </p>
            <p className="about-text">
              Our mission is to empower individuals to confidently embrace a hairstyle that enhances their natural features and expresses their unique identity. Whether you're looking for a bold change or a subtle update, GrooveON is your go-to destination for personalized hairstyling recommendations.
            </p>
            <p className="about-text">
              How does it work? Simply upload a photo of your face, and let our intelligent system analyze your facial features to recommend hairstyles tailored just for you. Say goodbye to indecision and hello to a newfound confidence in your hairstyle choices.
            </p>
            <p className="about-text">
              Join us at GrooveON and embark on a journey of self-expression through the art of hairstyling. Your perfect look awaits!
            </p>
          </div>
        </div>

        {/* Team member images section */}
        <div className="row py-lg-1">
          <div className="col-lg-10 col-md-8 mx-auto">
            <h2 className="fw-light">Meet Our Team</h2>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-2 text-center">
                <img src="/assets/aboutus/nilupul.jpg" alt="Nilupul" className="img-fluid rounded-circle mb-2 team-member" />
                <p className="member-name">Nilupul Nakalandala(Captain)</p>
              </div>
              <div className="col-md-2 text-center">
                <img src="/assets/aboutus/chenu.jpg" alt="Chenura" className="img-fluid rounded-circle mb-2 team-member" />
                <p className="member-name">Chenura Wickramasingha</p>
              </div>
              <div className="col-md-2 text-center">
                <img src="/assets/aboutus/induwara.jpg" alt="Induwara" className="img-fluid rounded-circle mb-2 team-member" />
                <p className="member-name">Induwara Dineth</p>
              </div>
              <div className="col-md-2 text-center">
                <img src="/assets/aboutus/dewram2.jpg" alt="Dewram" className="img-fluid rounded-circle mb-2 team-member" />
                <p className="member-name">Dewram Pieris</p>
              </div>
              <div className="col-md-2 text-center">
                <img src="/assets/aboutus/geeth.jpg" alt="Geeth" className="img-fluid rounded-circle mb-2 team-member" />
                <p className="member-name">Geeth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </>
  );
};

export default About;
