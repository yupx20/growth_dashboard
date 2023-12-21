// CarDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styling/CarDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  // You can fetch more details about the car based on the 'id'

  return (
    <div className="car-details">
      <h2>Car Details</h2>
      <p>Details for Car {id}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CarDetails;
