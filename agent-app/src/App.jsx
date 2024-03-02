import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home";
import About from "./About/About";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import Contact from "./Contact/Contact";
import Hairstyles from "./Hairstyles/Hairstyles";
import ReviewPage from "./Review/Review";
import CameraPage from "./CameraPage/CameraPage";


function App() {
  const [setResults] = useState([]);

  return (
    <Router>
      <Navbar setResults={setResults} />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        
        
        <Route path="/hairstyles" element={<Hairstyles />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/review" element={<ReviewPage/>}></Route>
        <Route path="/camerapage" element={<CameraPage/>}></Route>


        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
