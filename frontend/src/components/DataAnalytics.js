import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import '../styling/DataAnalytics.css';

// Register necessary components for ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,  // Register PointElement for Line charts
  LineElement,   // Register LineElement for Line charts
  ArcElement,    // Register ArcElement for Pie charts
  Title,
  Tooltip,
  Legend
);

const DataAnalytics = () => {
    // Dummy data
    const data = [
        {
            id: 1,
            witel: { nama: 'Witel 1' },
            bud: { tipe: 'BUD 1' },
            tahun_project: 2023,
            id_layanan: '12345',
            nama_pelanggan: 'Pelanggan 1',
            judul_kb: 'Judul KB 1',
            nomor_kb: 'KB001',
            estimasi_tanggal_kb: '2023-07-15',
            jangka_waktu_kontrak: 12,
            start_date_kontrak: '2023-07-01',
            end_date_kontrak: '2024-06-30',
            perkiraan_nilai_kontrak: 1000000.00,
            skema_bayar: 'On Time Charge',
            target_delivery: '2023-08-01',
            pic_witel: 'PIC 1',
            jenis_obl: { jenis: 'Jenis OBL 1' },
            mitra: { nama: 'Mitra 1' },
            judul_justifikasi_obl: 'Justifikasi OBL 1',
            perkiraan_nilai_obl: 500000.00,
            jenis_pengadaan: { jenis: 'Pengadaan 1' },
            target_billcomp: '2023-09-01',
            nomor_pengadaan: 'NP001',
            alasan_keterlambatan_pengajuan_obl: 'Alasan 1',
        },
        // Add more dummy data as needed
    ];

    // Transform data for charts
    const years = data.map(item => item.tahun_project);
    const values = data.map(item => item.perkiraan_nilai_kontrak);

    const chartData = {
        labels: years,
        datasets: [
            {
                label: 'Perkiraan Nilai Kontrak',
                data: values,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const pieChartData = {
        labels: ['On Time Charge', 'Monthly Recurring Charge', 'Termin', 'Dp-pelunasan'],
        datasets: [
            {
                data: [10, 20, 30, 40],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6347'],
                hoverOffset: 4,
            },
        ],
    };

    const barChartData = {
        labels: ['Jenis OBL 1', 'Jenis OBL 2', 'Jenis OBL 3'],
        datasets: [
            {
                label: 'Jumlah OBL',
                data: [10, 20, 30],
                backgroundColor: 'rgba(153,102,255,0.2)',
                borderColor: 'rgba(153,102,255,1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-header">Dashboard Justifikasi OBL</h1>
            <div className="charts-container">
                <div className="chart">
                    <h2>Perkiraan Nilai Kontrak per Tahun</h2>
                    <Line data={chartData} />
                </div>
                <div className="chart">
                    <h2>Skema Bayar Distribution</h2>
                    <Pie data={pieChartData} />
                </div>
                <div className="chart">
                    <h2>Jumlah OBL per Jenis OBL</h2>
                    <Bar data={barChartData} />
                </div>
            </div>
        </div>
    );
};

export default DataAnalytics;