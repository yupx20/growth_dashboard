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
          src="https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Right Section"
        />
      </div>
    </div>
  );
};

export default HeroSection;
