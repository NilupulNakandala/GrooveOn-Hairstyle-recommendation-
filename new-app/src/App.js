import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import ImageUpload from './components/ImageUpload';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopularHairstyles from './components/PopularHairstyles';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/Popular" element={<PopularHairstyles />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
