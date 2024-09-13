import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styling/Statistics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Jumlah Proyek',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/witel-project-count/');
        const projectData = await response.json();

        const witelNames = projectData.map(item => item.witel);
        const projectCounts = projectData.map(item => item.total_projects);

        setChartData({
          labels: witelNames,
          datasets: [
            {
              label: 'Jumlah Proyek',
              data: projectCounts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };

    loadData();
  }, []);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Mengarahkan kembali ke halaman sebelumnya
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Jumlah Proyek per Witel',
      },
    },
  };

  return (
    <div className="statistics-container">
      <Navbar />
      <div className="chart-container">
        <h2>Proyek Witel</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
      <button className="back-button" onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};

export default BarChart;
