// src/App.js
import React from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="scroll-indicator">
        <p>SCROLL</p>
        <div className="line"></div>
      </div>
      <main>
        <Timeline />
      </main>
      <Contact />
    </div>
  );
};

export default App;


