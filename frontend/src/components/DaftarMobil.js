  // DaftarMobil.js
  import React, { useState } from "react";
  import "../styling/DaftarMobil.css";
  import DetailMobil from "./DetailMobil";
  import OrderingView from "./OrderingView"; // Import the new component

  export const DaftarMobil = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCar, setSelectedCar] = useState(null);
    const [filteredCars, setFilteredCars] = useState([]);
    const [ordering, setOrdering] = useState(false);

    const carsData = [
      {
        name: "Tesla Model S",
        image: "../assets/tesla.jpg",
        description: "An electric luxury sedan with cutting-edge technology.",
        price: "$79,990",
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

    const filterCars = () => {
      const query = searchQuery.toLowerCase();
      const filtered = carsData.filter(
        (car) =>
          car.name.toLowerCase().includes(query) ||
          car.description.toLowerCase().includes(query)
      );
      setFilteredCars(filtered);
    };

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      filterCars();
    };

    const handleCarClick = (car) => {
      setSelectedCar(car);
    };

    const handleCloseDetails = () => {
      setSelectedCar(null);
      setOrdering(false);
    };

    const handleOrderNow = (car) => {
      setOrdering(true);
    };

    return (
      <div className="cars-page">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for cars..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        {selectedCar && !ordering && (
          <DetailMobil car={selectedCar} onClose={handleCloseDetails} />
        )}
        {ordering ? (
          <OrderingView
            car={selectedCar}
            handleOrderNow={handleOrderNow}
            handleCloseDetails={handleCloseDetails}
          />
        ) : (
          <div className="cars-container">
            {(filteredCars.length > 0 ? filteredCars : carsData).map((car, index) => (
              <div className="car-card" key={index} onClick={() => handleCarClick(car)}>
                <img className="car-image" alt={car.name} src={car.image} />
                <h2 className="car-name">{car.name}</h2>
                <p className="car-description">{car.description}</p>
                <button className="order-button" onClick={() => handleOrderNow(car)}>
                  Pesan Sekarang
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default DaftarMobil;