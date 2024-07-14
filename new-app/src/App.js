import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import Recommendation from './components/Recommendation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopularHairstyles from './components/PopularHairstyles';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Recommendation" element={<Recommendation />} />
          <Route path="/PopularHairstyles" element={<PopularHairstyles />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
