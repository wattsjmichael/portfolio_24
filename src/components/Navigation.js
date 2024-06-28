// src/components/Navigation.js
import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;

