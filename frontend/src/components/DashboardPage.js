import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styling/dashboard.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/combined-justifikasi-by-idlop/');
        const result = await response.json();
        console.log(result); // Log to check data structure
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleRowClick = (idlop) => {
    navigate(`/growth/${idlop}`);
  };

  // Filtered data based on search term
  const filteredData = data.filter(item => 
    item.idlop.toLowerCase().includes(searchTerm.toLowerCase()) || // Search by IDLOP
    item.namaPelanggan.toLowerCase().includes(searchTerm.toLowerCase()) || // Search by Nama Pelanggan
    item.judulKontrakKB.toLowerCase().includes(searchTerm.toLowerCase()) // Search by Judul Kontrak KB
    // Add more fields to search if needed
  );

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <div className="dashboard">
          {/* Search Input */}
          <input 
            type="text" 
            placeholder="Search Project..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            style={{
              width: '50%', 
              padding: '10px', 
              fontSize: '16px', 
              borderRadius: '15px', 
              border: '1px solid #ccc', 
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
              outline: 'none',
              marginBottom: '20px',
              transition: 'box-shadow 0.3s ease',
            }}
            onFocus={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'}
            onBlur={(e) => e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'}
          />
          <table>
            <thead>
              <tr>
                <th>IDLOP</th>
                <th>Witel</th>
                <th>Nama Pelanggan</th>
                <th>Judul Kontrak KB</th>
                <th>Nomor Kontrak KB</th>
                <th>Estimasi Tanggal KB</th>
                <th>Jangka Waktu Kontrak</th>
                <th>Start Date Kontrak</th>
                <th>End Date Kontrak</th>
                <th>Perkiraan Nilai Kontrak (2023)</th>
                <th>Perkiraan Nilai OBL (2023)</th>
                <th>Perkiraan Nilai Kontrak (2024)</th>
                <th>Perkiraan Nilai OBL (2024)</th>
                <th>Skema Bayar Pelanggan</th>
                <th>Target Delivery</th>
                <th>PIC Witel</th>
                <th>Jenis OBL</th>
                <th>Mitra</th>
                <th>Judul Justifikasi OBL</th>
                <th>Jenis Pengadaan</th>
                <th>Target Billcomp</th>
                <th>Nomor Pengadaan</th>
                <th>Alasan Keterlambatan Pengajuan OBL</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} onClick={() => handleRowClick(item.idlop)}>
                  <td>{item.idlop}</td>
                  <td>{item.witel}</td>
                  <td>{item.namaPelanggan}</td>
                  <td>{item.judulKontrakKB}</td>
                  <td>{item.nomorKontrakKB}</td>
                  <td>{item.estimasiTanggalKB}</td>
                  <td>{item.jangkaWaktuKontrak}</td>
                  <td>{item.startDateKontrak}</td>
                  <td>{item.endDateKontrak}</td>
                  <td>{item.perkiraanNilaiKontrak_2023}</td>
                  <td>{item.perkiraanNilaiPekerjaan_2023}</td>
                  <td>{item.perkiraanNilaiKontrak_2024}</td>
                  <td>{item.perkiraanNilaiPekerjaan_2024}</td>
                  <td>{item.skemaBayarPelanggan}</td>
                  <td>{item.targetDelivery}</td>
                  <td>{item.picWitel}</td>
                  <td>{item.jenisOBL}</td>
                  <td>{item.mitra}</td>
                  <td>{item.judulJustifikasiOBL}</td>
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
      <button className="back-button" onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};

export default Dashboard;
