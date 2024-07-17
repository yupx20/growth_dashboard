// HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../styling/HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLearnMoreClick = () => {
    navigate('/about'); // Navigate to the 'about' page
  };

  return (
    <div className="hero-section">
      <div className="left-section">
        <h1>ACCOMPANY YOUR JOURNEY WITH COMFORT</h1>
        <p>Car rent services for various terrain with guaranteed quality.</p>
        <button id="learnMoreButton" onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>
      <div className="right-section">
        <img
          src="https://www.telkom.co.id/minio/show/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png"
          alt="Right Section"
        />
      </div>
    </div>
  );
};

export default HeroSection;
