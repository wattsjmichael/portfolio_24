// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import { initGA, logPageView } from './analytics';
import './styles.css';

const usePageViews = () => {
  const location = useLocation();
  useEffect(() => {
    initGA();
    logPageView();
  }, [location]);
};

const App = () => {
  return (
    <Router>
      <PageViewsHandler />
      <div className="App">
        <Header />
        <div className="scroll-indicator">
          <p>SCROLL</p>
          <div className="line"></div>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Timeline />} />
          </Routes>
        </main>
        <Contact />
      </div>
    </Router>
  );
};

const PageViewsHandler = () => {
  usePageViews();
  return null;
};

export default App;




