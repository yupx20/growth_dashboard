import React from 'react';
import { Chart, ArcElement, ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styling/Statistics.css';

// Daftarkan elemen 'arc'
Chart.register(ArcElement,CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const StatisticsPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const data1 = {
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

  const data2 = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
    datasets: [
      {
        label: 'Pendapatan 2023 (dalam juta)',
        data: [12, 19, 8, 15, 22, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Pendapatan 2022 (dalam juta)',
        data: [10, 17, 6, 13, 20, 25],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Perbandingan Pendapatan Semester 1 Tahun 2022 vs 2023',
      },
    },
  };

  return (
    <div className="statistics-container">
      <Navbar />
      <div className="chart-container">
      <h2>Statistics</h2>
        <Pie data={data1} />
      </div>
      <div className="chart-container">
      <h2>Bar Chart</h2>
        <Bar data={data2} options={options} />
      </div>
      <button className="back-button" onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    </div>
  );
};

export default StatisticsPage;
