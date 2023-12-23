// Footer.js
import React from "react";
import "../styling/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/adibdaffa_" target="_blank" rel="noopener noreferrer">
              <img src="../assets/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.github.com/adibdaffa20" target="_blank" rel="noopener noreferrer">
              <img src="../assets/github.png" alt="Github" />
            </a>
            <a href="https://wa.me/6281239070425" target="_blank" rel="noopener noreferrer">
              <img src="../assets/whatsapp.png" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Mafia Rent Car. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
