// OrderingView.js

import React, { useState } from "react";
import "../styling/OrderingView.css"; // Import the CSS file

const OrderingView = ({ car, handleOrderNow, handleCloseDetails }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "6281239070425"; // Replace with the actual phone number
    const message = `Halo, saya ingin pesan ${car.name}. Apakah tersedia pada tanggal ${selectedDate}?`; // Customize the message

    // Create a WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.location.href = whatsappLink;
  };

  return (
    <div className="ordering-view">
      <img className="car-image" alt={car.name} src={car.image} />
      <p>{car.name}</p>
      <p>Amankan Jadwalmu Sekarang! {car.price}</p>
      {/* Add more information as needed */}
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      <button onClick={handleWhatsAppOrder}>Pesan Sekarang</button>
      <button onClick={handleCloseDetails}>Kembali</button>
    </div>
  );
};

export default OrderingView;
