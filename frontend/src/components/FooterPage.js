// Footer.js
import React from "react";
import "../styling/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Location and Opening Hours Section */}
        <div className="footer-sec">
          <h3>Location</h3>
          <p>Jl. Letjend. S. Parman No.4, Krajan Kulon, Waru, Kabupaten, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256</p>

          <h3>Opening Hours</h3>
          <p>Everyday: 04.00 AM - 23.59 PM</p>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
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
