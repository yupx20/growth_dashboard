import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../styling/Growth.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Growth = () => {
  const { idlop } = useParams();  // Corrected to ensure idlop is available from the URL
  const [data, setData] = useState({});
  const [chartDataKB, setChartDataKB] = useState({
    labels: [],
    datasets: [
      {
        label: 'KB',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
        }
        ]
  });
  const [chartDataOBL, setChartDataOBL] = useState({
    labels: [],
    datasets: [
      {
        label: 'OBL',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
        }
        ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/get-growth-data/${idlop}/`);
        if (!response.ok) {
          throw new Error('Data not found');
        }
        const result = await response.json();
        setData(result);

        const witelNames = result.witelNames;
        const nilaiKB = [result.nilaiKB2023, result.nilaiKB2024];
        const nilaiOBL = [result.nilaiOBL2023, result.nilaiOBL2024];

        // Setup Chart Data for Nilai KB
        setChartDataKB({
          labels: [2023, 2024],
          datasets: [
            {
              label: 'Nilai KB',
              data: nilaiKB,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });

        // Setup Chart Data for Nilai OBL
        setChartDataOBL({
          labels: [2023, 2024],
          datasets: [
            {
              label: 'Nilai OBL',
              data: nilaiOBL,
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [idlop]);

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Jumlah Proyek per Witel',
      },
    },
  };

  // Helper function to safely format a number with toFixed
  const formatPercentage = (value) => {
    return (typeof value === 'number' && !isNaN(value)) ? value.toFixed(2) : 'N/A';
  };

  return (
    <div className="growth-container">
      <Navbar />
      <div className="growth">
        <div className="growth-content-container" style={{ height: '30vh' }}>
          <h1>Justifikasi OBL Growth</h1>
          <table className="growth-table">
            <thead>
              <tr>
                <th>Judul Justifikasi</th>
                <th>Komposisi CPE 2023</th>
                <th>Komposisi CPE 2024</th>
                <th>Growth Revenue</th>
                <th>Growth OBL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.judulJustifikasiOBL}</td>
                <td>{formatPercentage(data.komposisi_cpe_2023 * 100)}%</td>
                <td>{formatPercentage(data.komposisi_cpe_2024 * 100)}%</td>
                <td>{formatPercentage(data.growth_revenue * 100)}%</td>
                <td>{formatPercentage(data.growth_obl * 100)}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='growth-content-container' style={{ display: 'flex', flexDirection: 'row', height: '40vh' }}>
          <div className="chart">
            <h2>Nilai KB</h2>
            <Bar data={chartDataKB} options={chartOptions} />
          </div>
          <div className="chart">
            <h2>Nilai OBL</h2>
            <Bar data={chartDataOBL} options={chartOptions} />
          </div>
        </div>
      </div>
      <button className="back-button" onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};

export default Growth;
