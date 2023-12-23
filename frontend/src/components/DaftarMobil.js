// Cars.js
import React from "react";
import "../styling/DaftarMobil.css";

export const DaftarMobil = () => {
  const carsData = [
    {
      name: "Tesla Model S",
      image: "../assets/tesla.jpg",
      description: "An electric luxury sedan with cutting-edge technology.",
    },
    {
      name: "Toyota Camry",
      image: "../assets/camry.jpg",
      description: "A reliable and fuel-efficient midsize sedan.",
    },
    {
      name: "Ford Mustang",
      image: "../assets/mustang.jpeg",
      description: "A classic American muscle car known for its performance.",
    },
    {
      name: "Innova Reborn",
      image: "../assets/reborn.png",
      description: "A popular comfort car.",
    },
    {
      name: "All New Toyota Alphard",
      image: "../assets/alphard.jpg",
      description: "An iconic sports car with powerful performance.",
    },
    {
      name: "BMW 3 Series",
      image: "../assets/bmw.png",
      description: "A luxury compact sedan known for its driving dynamics.",
    },
    {
      name: "Mercedes-Benz C-Class",
      image: "../assets/merc.jpeg",
      description: "An elegant and stylish luxury sedan.",
    },
    {
      name: "Audi Q5",
      image: "../assets/audi.jpg",
      description: "A premium SUV offering comfort and advanced features.",
    },
    {
      name: "Jeep Wrangler",
      image: "../assets/jeep.png",
      description: "A rugged and off-road capable SUV with a distinctive design.",
    },
    // Add more cars as needed
  ];

  return (
    <div className="cars-page">
      <div className="cars-container">
        {carsData.map((car, index) => (
          <div className="car-card" key={index}>
            <img className="car-image" alt={car.name} src={car.image} />
            <h2 className="car-name">{car.name}</h2>
            <p className="car-description">{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarMobil;
