// Footer.js
import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Information */}
        <div className="footer-section company-info">
          <h2>ShopLogo</h2>
          <p>Your one-stop shop for all things awesome! Quality products, excellent service, and fast delivery.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>Email: support@shoplogo.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Commerce St, City, Country</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopLogo. All rights reserved.</p>
        <p><Link to="/terms">Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
