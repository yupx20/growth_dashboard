import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styling/Growth.css';

const Growth = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/growth-data/')
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Debugging: lihat data yang diterima
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(value);
  };

  return (
    <div className="growth-container">
      <Navbar />
      <div className="growth-chart-container">
        <h1>Justifikasi OBL Growth</h1>
        <table className="growth-table">
          <thead>
            <tr>
              <th>Judul Justifikasi</th>
              <th>Perkiraan Nilai Pekerjaan</th>
              <th>Perkiraan Nilai Kontrak</th>
              <th>Komposisi CPE (%)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.judul}</td>
                <td>{formatCurrency(item.perkiraan_nilai_pekerjaan)}</td>
                <td>{formatCurrency(item.perkiraan_nilai_kontrak)}</td>
                <td>{typeof item.ratio === 'number' ? item.ratio.toFixed(2) : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="back-button" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
    </div>
  );
};

export default Growth;