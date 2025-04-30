// src/components/Timeline.js
import React, { useEffect } from 'react';
import './Timeline.css';

const Timeline = () => {
  const events = [
    { date: 'May 2025', title: "Obtain PMP Certification", description: "Working toward PMP based on 5 years of technical project management in immersive VR." },
    { date: 'Nov 2024', title: "Launch Bahamut Design", description: "Indie VR game studio. First title, Fantasy Remnants, now in production." },
    { date: 'Nov 2021', title: "VR Developer, AK Preparedness", description: "Led development of VR life safety tours for commercial clients. Managed 50+ accounts and delivered 600+ site upgrades." },
    { date: 'Mar 2021', title: "VR Developer, PDXR", description: "Developed emergency-use virtual maps and interactive environments." },
    { date: 'Dec 2020', title: "Software Developer, Grant Us Funding", description: "Built React + MongoDB app, led UI/UX, and created dev documentation." },
    { date: 'Apr 2020', title: "Co-Founder, Brewsnap", description: "Built AR experiences for breweries and launched early bar coaster prototypes." },
    { date: 'Nov 2019', title: "GM, Killer Burger", description: "Ran daily operations and managed a 20+ person team at a high-volume location." },
    { date: 'Apr 2019', title: "Project Coordinator, All Traffic Data", description: "Collected traffic data and collaborated with DOTs on funding requests." },
    { date: 'May 2018', title: "Recreation Director, Daybreak Youth", description: "Planned youth activities and oversaw recreational programs and supplies." },
    { date: 'May 2017', title: "GM, Sproos Taphouse & Wine Bar", description: "Handled events, daily ops, and all social media marketing for a local hotspot." },
    { date: 'Sep 2014', title: "Portland Manager, Chill Foundation (Burton)", description: "Expanded youth programs and built partnerships to support underserved teens." },
    { date: 'Sep 2013', title: "Teen Lead, Boys and Girls Club SW WA", description: "Launched a beekeeping program — sold a $5K jar of honey at auction." },
    { date: 'Sep 2013', title: "Bartender, LowBar", description: "Named 'Best Bartender in Washington' by BevMo! and Bacardi. No big deal." }
  ];


  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.timeline-item');
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          item.classList.add('in-view');
        } else {
          item.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="timeline" className="timeline">
      <h2>My Journey</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-item-content">
              <span className="date">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <span className="circle"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;


