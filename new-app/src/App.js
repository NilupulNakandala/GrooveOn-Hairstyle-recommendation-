import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import Recommendation from './components/Recommendation';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopularHairstyles from './components/PopularHairstyles';
// import About

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/Recommendation" element={<Recommendation />} />
          <Route path="/PopularHairstyles" element={<PopularHairstyles />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<Contact />} />
          <Route path="/Review" element={<Contact />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
