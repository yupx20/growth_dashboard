// Benefits.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCar, faStar } from '@fortawesome/free-solid-svg-icons';
import '../styling/Benefit.css';

const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="benefit-row">
        <div className="benefit">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          <h3>Search Location</h3>
          <p>Lokasi kami berada di tempat yang strategis dan mudah dijangkau.</p>
        </div>
        <div className="benefit">
          <FontAwesomeIcon icon={faCar} size="2x" />
          <h3>Banyak Pilihan Mobil</h3>
          <p>Pilih mobil favorit Anda dari semua mobil yang kami sediakan.</p>
        </div>
        <div className="benefit">
          <FontAwesomeIcon icon={faStar} size="2x" />
          <h3>Standar Kualitas Tinggi</h3>
          <p>Menawarkan kualitas tinggi dalam segala hal, dari fasilitas hingga pelayanan, sehingga Anda bisa merasakan kenyamanan maksimal.</p>
        </div>
      </div>
      {/* Peta Google Maps di bawah seperti footer */}
      <div className="map-container">
        <iframe
          title="Search Location Map"
          width="100%"
          height="200"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.598178744422!2d112.71837472915651!3d-7.365156213486533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e4bab51796c3%3A0x72e59358a8c7300a!2sMcDonald&#39;s%20Waru!5e0!3m2!1sen!2sid!4v1703501963102!5m2!1sen!2sid"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Benefits;
