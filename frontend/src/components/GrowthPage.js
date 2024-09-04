import React, { useState } from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styling/Growth.css';

const Growth = () => {
  const [data] = useState([
    { year: '2023', value: 200 },
    { year: '2024', value: 350 },
  ]);

  // Calculate the growth percentage
  const growthPercentage = ((data[1].value - data[0].value) / data[0].value) * 100;

  return (
    <div className="growth-container">
        <Navbar />
        <div className="growth-chart-container">
          <h1>Yearly Growth Comparison</h1>
          <table className="growth-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.year}>
                  <td>{item.year}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="growth-summary">
            <h2>Growth Percentage: {growthPercentage.toFixed(2)}%</h2>
          </div>
          <button className="back-button" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        </div>
      </div>
  );
};

export default Growth;
