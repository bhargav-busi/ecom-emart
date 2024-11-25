import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <h2 className="footer-title">
        <i className="fas fa-shopping-bag"></i> Mart
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
        id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus
        vel ut sollicitudin elit at amet.
      </p>
    </div>
    <div className="footer-section">
      <h3>About Us</h3>
        <p>Careers</p>
        <p>Our Stores</p>
        <p>Our Cares</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      
    </div>
    <div className="footer-section">
      <h3>Customer Care</h3>
      
        <p>Help Center</p>
        <p>How to Buy</p>
        <p>Track Your Order</p>
        <p>Corporate & Bulk Purchasing</p>
        <p>Returns & Refunds</p>
      
    </div>
    <div className="footer-section">
      <h3>Contact Us</h3>
      <address>
        70 Washington Square South, New York, NY 10012, United States<br />
        Email: <a href="mailto:example@gmail.com">example@gmail.com</a><br />
        Phone: <a href="tel:+1123456780">+1 1123 456 780</a>
      </address>
    </div>
  </footer>
);

export default Footer;
