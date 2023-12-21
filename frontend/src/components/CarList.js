// CarList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/CarList.css';

const CarList = () => {
  const carData = [
    {
      id: 1,
      name: 'Car 1',
      image: 'https://source.unsplash.com/500x300/?car',
    },
    {
      id: 2,
      name: 'Car 2',
      image: 'https://source.unsplash.com/500x300/?vehicle',
    },
    // Add more cars as needed
  ];

  return (
    <div className="car-list">
      <h2>Car List</h2>
      <ul>
        {carData.map((car) => (
          <li key={car.id}>
            <Link to={`/car/${car.id}`}>
              <img src={car.image} alt={car.name} />
              <p>{car.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
