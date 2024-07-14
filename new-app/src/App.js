import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Recommendation from './components/Recommendation';
import Contact from './components/Contact';
import PopularHairstyles from './components/PopularHairstyles';
import About from './components/About';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>Dynamic Website Title (using React Helmet)</title>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recommendation" element={<Recommendation />} />
          <Route path="/PopularHairstyles" element={<PopularHairstyles />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About/>} />
          <Route path="*"element={<NotFound/>}/>
        </Routes>
        
      </Router>
      <Footer />
    </div>
  );
}

export default App;
