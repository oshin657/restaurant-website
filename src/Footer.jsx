import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <img
            src="https://img.freepik.com/premium-vector/retro-restaurant-logo_23-2148474404.jpg"
            alt="Hotel Logo"
          />
          <p>Your comfort is our priority.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Kathmandu, Nepal</p>
          <p>📞 +977-9800000000</p>
          <p>✉️ hotel@example.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Luxury Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
