// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import './styles.css';

const usePageViews = () => {
  let location = useLocation();
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
          <Switch>
            <Route path="/timeline" component={Timeline} />
          </Switch>
        </main>
        <Contact />
      </div>
    </Router>
  );
};

export default App;



