import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styling/dashboard.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 10; // Items per page
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const location = useLocation();
  const adminName = location.state?.adminName;

  // Check login state (example, if you are using adminName in location state)
  useEffect(() => {
    const isLoggedIn = !!location.state?.adminName; 

    if (!isLoggedIn) {
      navigate('/');
    }
  }, [location, navigate]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/combined-justifikasi-by-idlop/');
        const result = await response.json();
        console.log(result);
        setData(result);
        setLoading(false); // Data fetched successfully
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Error fetching data
      }
    };

    fetchData();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    .filter(item =>
      item.idlop.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.namaPelanggan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.judulKontrakKB.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRowClick = (idlop) => {
    navigate(`/growth/${idlop}`, { state: { adminName } });
  };

  const goBack = () => {
    navigate(-1);
  };

  // Search input with debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setCurrentPage(1); // Reset to page 1 when search term changes
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>; // Loading feedback while fetching data
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <div className="dashboard">
          <input
            type="text"
            placeholder="Search Project..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="table-container">
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
                  <th>Alasan Keterlambatan OBL</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
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

          {/* Pagination Controls */}
          <div className="pagination">
            <button 
              onClick={handlePreviousPage} 
              disabled={currentPage === 1} 
              className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
            >
              Previous
            </button>
            <span>{currentPage} of {totalPages}</span>
            <button 
              onClick={handleNextPage} 
              disabled={currentPage === totalPages} 
              className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <button className="back-button" onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};

export default Dashboard;