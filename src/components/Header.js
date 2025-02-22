// src/components/Header.js
import React from 'react';
import Background from './Background';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Background />
      <div className="header-content">
        <h1>Hello, my name is Michael.</h1>
        <p>
          I'm a <span>VR Developer</span> and <span>Project Manager</span> based in Longview, WA, with extensive experience in managing and developing VR/AR projects. I transitioned from a restaurant manager to a tech professional, utilizing my leadership skills and technical expertise to create virtual recreations for emergency preparedness. I excel in managing multiple projects, developing VR/AR solutions, and collaborating with high-profile clients.
        </p>
        <a href="https://www.oregonlive.com/business/2021/12/after-layoff-restaurant-manager-finds-new-career-in-virtual-reality-passion.html" target="_blank" rel="noopener noreferrer">
          Read my story on OregonLive
        </a>
      </div>
      {/* <div className="header-image">
        <img src="https://via.placeholder.com/150" alt="Michael Watts" />
      </div> */}
    </header>
  );
};

export default Header;

