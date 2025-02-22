// src/components/Timeline.js
import React, { useEffect } from 'react';
import './Timeline.css';

const Timeline = () => {
  const events = [
    { date: 'March 2025', title: "Obtain PMP", description: "Obtaining my PMP with the work I have done in VR in the last 5 years" },
    { date: 'Nov 2024', title: "Start Bahamut Design", description: "Indie Virtual Reality gaming studio, first tile, Fantasy Remnants is in production" },
    { date: 'Nov 2021', title: "Virtual Reality Developer at AK Preparedness", description: "Created VR life safety tours and managed multiple projects for various clients, overseeing upgrades of over 300 websites and managing a portfolio of 25+ clients." },
    { date: 'Mar 2021', title: "Virtual Reality Developer at PDXR", description: "Developed virtual maps for emergency use using various tools." },
    { date: 'Dec 2020', title: "Software Developer at Grant Us Funding", description: "Created a React and MongoDB solution, handled UI/UX, and wrote documentation." },
    { date: 'Apr 2020', title: "Sales and Marketing Specialist at Brewsnap", description: "Created AR experiences and networked with local breweries." },
    { date: 'Nov 2019', title: "General Manager at Killer Burger", description: "Flipped burgers, managed a staff of 20+, ran day to day duties." },
    { date: 'Apr 2019', title: "Project Coordinator at All Traffic Data Services", description: "Measured traffic data and worked with government officials for federal funding." },
    { date: 'May 2018', title: "Recreation Director at Daybreak Youth Services", description: "Coordinated activities for youth, managed recreation calendar, and handled inventory." },
    { date: 'May 2017', title: "General Manager at Sproos Taphouse and Wine Bar", description: "Organized events, handled day-to-day operations, and managed social media marketing." },
    { date: 'Sep 2014', title: "Portland Manager at The Chill Foundation (Burton Snowboards)", description: "Added youth-development programs and partnered with local businesses to enhance the curriculum." },
    { date: 'Sep 2013', title: "Teen Lead at Boys and Girls Club of SW WA", description: "Favorite part - Created a beekeeping program that ended up selling a jar of our honey for 5k!" },
    { date: 'Sep 2013', title: "Bartender at LowBar", description: "Won 'Best Bartender in the State of Washingtion' according to BevMo! and Bacardi." },
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


