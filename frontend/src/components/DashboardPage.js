import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styling/dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/justifikasi-obl/');
        const result = await response.json();
        console.log(result); // Log data to check its structure
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="dashboard-container">
      <Navbar /> {/* Include Navbar component */}
      <div className="dashboard-content">
        <div className="dashboard">
          <table>
            <thead>
              <tr>
                <th>IDLOP</th>
                <th>Nama Pelanggan</th>
                <th>Judul Kontrak KB</th>
                <th>Nomor Kontrak KB</th>
                <th>Estimasi Tanggal KB</th>
                <th>Jangka Waktu Kontrak</th>
                <th>Start Date Kontrak</th>
                <th>End Date Kontrak</th>
                <th>Perkiraan Nilai Kontrak</th>
                <th>Skema Bayar Pelanggan</th>
                <th>Target Delivery</th>
                <th>PIC Witel</th>
                <th>Jenis OBL</th>
                <th>Mitra</th>
                <th>Judul Justifikasi OBL</th>
                <th>Perkiraan Nilai OBL</th>
                <th>Jenis Pengadaan</th>
                <th>Target Billcomp</th>
                <th>Nomor Pengadaan</th>
                <th>Alasan Keterlambatan Pengajuan OBL</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.idlop}</td>
                  <td>{item.namaPelanggan}</td>
                  <td>{item.judulKontrakKB}</td>
                  <td>{item.nomorKontrakKB}</td>
                  <td>{item.estimasiTanggalKB}</td>
                  <td>{item.jangkaWaktuKontrak}</td>
                  <td>{item.startDateKontrak}</td>
                  <td>{item.endDateKontrak}</td>
                  <td>{item.perkiraanNilaiPekerjaan}</td>
                  <td>{item.skemaBayarPelanggan}</td>
                  <td>{item.targetDelivery}</td>
                  <td>{item.picWitel}</td>
                  <td>{item.jenisOBL}</td>
                  <td>{item.mitra}</td>
                  <td>{item.judulJustifikasiOBL}</td>
                  <td>{item.perkiraanNilaiPekerjaan}</td>
                  <td>{item.jenisPengadaan}</td>
                  <td>{item.targetBillcomp}</td>
                  <td>{item.nomorQuote}</td>
                  <td>{item.alasanKeterlambatanOBL || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;