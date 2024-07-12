import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import ImageUpload from './components/ImageUpload';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopularHairstyles from './components/PopularHairstyles';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/popular" element={<PopularHairstyles />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;