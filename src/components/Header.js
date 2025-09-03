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
  I'm a <span>Technical Project Manager</span> and <span>VR/AR Developer</span> based in Longview, WA. 
  I transitioned from managing restaurants and non-profits to building immersive tech experiences, bringing leadership, adaptability, 
  and a builder's mindset to every project. I’ve led the development of virtual training tools for emergency preparedness, 
  launched AI-powered web apps, and collaborated with high-profile clients on cutting-edge solutions. Whether managing teams 
  or prototyping in Unity or Vue, I focus on clarity, execution, and making things that actually work.
</p>
<br></br>
<a href="https://www.oregonlive.com/business/2021/12/after-layoff-restaurant-manager-finds-new-career-in-virtual-reality-passion.html" target="_blank" rel="noopener noreferrer">
  <b>Read my story on OregonLive</b>
</a>
<br />
<a href="https://aiflattery.com" target="_blank" rel="noopener noreferrer">
  Try one of my AI experiments: AIFlattery.com
</a>

      </div>
      {/* <div className="header-image">
        <img src="https://via.placeholder.com/150" alt="Michael Watts" />
      </div> */}
    </header>
  );
};

export default Header;

