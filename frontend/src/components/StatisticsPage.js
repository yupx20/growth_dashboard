import React from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styling/Statistics.css';

// Daftarkan elemen 'arc'
Chart.register(ArcElement);

const StatisticsPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="statistics-container">
      <Navbar />
      <h2>Statistics</h2>
      <div className="pie-chart-container">
        <Pie data={data} />
      </div>
      <button className="back-button" onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    </div>
  );
};

export default StatisticsPage;
