// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import './styles.css';

const usePageViews = () => {
  const location = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-ZKJE5EH3BJ', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

const App = () => {
  usePageViews();

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="scroll-indicator">
          <p>SCROLL</p>
          <div className="line"></div>
        </div>
        <main>
          <Routes>
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Contact />
      </div>
    </Router>
  );
};

export default App;




