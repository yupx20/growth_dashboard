// DetailMobil.js
import React from "react";
import "../styling/DetailMobil.css";

const DetailMobil = ({ car, onClose }) => {
  return (
    <div className="car-details-overlay" onClick={onClose}>
      <div className="car-details">
        <img className="car-image" alt={car.name} src={car.image} />
        <h2 className="car-name">{car.name}</h2>
        <p className="car-description">{car.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default DetailMobil;
