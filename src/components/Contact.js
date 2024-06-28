import React from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact">
      <Helmet>
        <title>Michael Watts</title>
        <meta name="description" content="Get in touch with Michael Watts through LinkedIn, GitHub, email, or download his resume." />
      </Helmet>
      <h2>Contact</h2>
      <ul className="contact-list">
        <li><a href="https://www.linkedin.com/in/wattsjmichael" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="mailto:wattsjmichael@gmail.com">Email</a></li>
        <li><a href="/prod_mngr.pdf" target="_blank" rel="noopener noreferrer">Project Manager Resume</a></li>
      </ul>
    </footer>
  );
};

export default Contact;
