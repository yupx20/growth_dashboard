import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styling/Input.css';

const InputUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [greeting, setGreeting] = useState('');
  const [userName, setUserName] = useState('');

  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    witel: '',
    bud: '',
    tahunProject: '',
    idlop: '',
    namaPelanggan: '',
    judulKontrakKB: '',
    nomorKontrakKB: '',
    estimasiTanggalKB: '',
    jangkaWaktuKontrak: '',
    startDateKontrak: '',
    endDateKontrak: '',
    skemaBayarPelanggan: '',
    targetDelivery: '',
    picWitel: '',
    jenisOBL: '',
    mitra: '',
    judulJustifikasiOBL: '',
    perkiraanNilaiPekerjaan: '',
    jenisPengadaan: '',
    targetBillcomp: '',
    nomorQuote: '',
    alasanKeterlambatanOBL: '',
  });

  useEffect(() => {
    const user = localStorage.getItem('user') || 'User';
    setUserName(user);

    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good Morning');
    } else if (hours < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Night');
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/justifikasi-obl/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert("Data submitted successfully");
        // Reset form after submission
        setFormData({
          witel: '',
          bud: '',
          tahunProject: '',
          idlop: '',
          namaPelanggan: '',
          judulKontrakKB: '',
          nomorKontrakKB: '',
          estimasiTanggalKB: '',
          jangkaWaktuKontrak: '',
          startDateKontrak: '',
          endDateKontrak: '',
          skemaBayarPelanggan: '',
          targetDelivery: '',
          picWitel: '',
          jenisOBL: '',
          mitra: '',
          judulJustifikasiOBL: '',
          perkiraanNilaiPekerjaan: '',
          jenisPengadaan: '',
          targetBillcomp: '',
          nomorQuote: '',
          alasanKeterlambatanOBL: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Failed to submit data");
      });
  };

  return (
    <>
      <div className="background"></div>
      <div className="new-page">
        <h3>{`${greeting}, ${userName}`}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Witel:
            <select name="witel" value={formData.witel} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="Surabaya Selatan">Surabaya Selatan</option>
              <option value="Surabaya Utara">Surabaya Utara</option>
              <option value="Denpasar">Denpasar</option>
              <option value="Sidoarjo">Sidoarjo</option>
              <option value="Malang">Malang</option>
              <option value="Madura">Madura</option>
              <option value="Pasuruan">Pasuruan</option>
              <option value="Jember">Jember</option>
              <option value="Kediri">Kediri</option>
              <option value="Madiun">Madiun</option>
              <option value="Singaraja">Singaraja</option>
              <option value="NTT">NTT</option>
              <option value="NTB">NTB</option>
            </select>
          </label>

          <label>
            BUD:
            <select name="bud" value={formData.bud} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="DBS">DBS</option>
              <option value="DGS">DGS</option>
              <option value="DES">DES</option>
              <option value="DPS (Private)">DPS (Private)</option>
              <option value="DSS (SOE)">DSS (SOE)</option>
            </select>
          </label>

          <label>
            Tahun Project:
            <select name="tahunProject" value={formData.tahunProject} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </label>

          <label>
            IDLOP:
            <input type="text" name="idlop" value={formData.idlop} onChange={handleInputChange} />
          </label>

          <label>
            Nama Pelanggan:
            <input type="text" name="namaPelanggan" value={formData.namaPelanggan} onChange={handleInputChange} />
          </label>

          <label>
            Judul Kontrak KB:
            <input type="text" name="judulKontrakKB" value={formData.judulKontrakKB} onChange={handleInputChange} />
          </label>

          <label>
            Nomor Kontrak KB:
            <input type="text" name="nomorKontrakKB" value={formData.nomorKontrakKB} onChange={handleInputChange} />
          </label>

          <label>
            Estimasi Tanggal KB:
            <input type="date" name="estimasiTanggalKB" value={formData.estimasiTanggalKB} onChange={handleInputChange} />
          </label>

          <label>
            Jangka Waktu Kontrak:
            <input type="text" name="jangkaWaktuKontrak" value={formData.jangkaWaktuKontrak} onChange={handleInputChange} />
          </label>

          <label>
            Start Date Kontrak:
            <input type="date" name="startDateKontrak" value={formData.startDateKontrak} onChange={handleInputChange} />
          </label>

          <label>
            End Date Kontrak:
            <input type="date" name="endDateKontrak" value={formData.endDateKontrak} onChange={handleInputChange} />
          </label>

          <label>
            Skema Bayar Pelanggan:
            <select name="skemaBayarPelanggan" value={formData.skemaBayarPelanggan} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="One Time Charge (OTC)">One Time Charge (OTC)</option>
              <option value="Monthly Recurring Charge (MRC)">Monthly Recurring Charge (MRC)</option>
              <option value="Termin">Termin</option>
              <option value="DP dan Pelunasan">DP dan Pelunasan</option>
            </select>
          </label>

          <label>
            Target Delivery:
            <input type="date" name="targetDelivery" value={formData.targetDelivery} onChange={handleInputChange} />
          </label>

          <label>
            PIC Witel:
            <input type="text" name="picWitel" value={formData.picWitel} onChange={handleInputChange} />
          </label>

          <label>
            Jenis OBL:
            <select name="jenisOBL" value={formData.jenisOBL} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="KL">KL</option>
              <option value="WO">WO</option>
              <option value="SP">SP</option>
            </select>
          </label>

          <label>
            Mitra:
            <select name="mitra" value={formData.mitra} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="KOPEGTEL KEDIRI">KOPEGTEL KEDIRI</option>
              <option value="KOPEGTEL MALANG">KOPEGTEL MALANG</option>
              <option value="KOPKAR SMART MEDIA">KOPKAR SMART MEDIA</option>
              <option value="PT ADMINISTRASI MEDIKA / ADMEDIKA">PT ADMINISTRASI MEDIKA / ADMEDIKA</option>
            </select>
          </label>

          <label>
            Judul Justifikasi OBL:
            <input type="text" name="judulJustifikasiOBL" value={formData.judulJustifikasiOBL} onChange={handleInputChange} />
          </label>

          <label>
            Perkiraan Nilai Pekerjaan:
            <input type="number" name="perkiraanNilaiPekerjaan" value={formData.perkiraanNilaiPekerjaan} onChange={handleInputChange} />
          </label>

          <label>
            Jenis Pengadaan:
            <select name="jenisPengadaan" value={formData.jenisPengadaan} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="KHS">KHS</option>
              <option value="PL">PL</option>
              <option value="Tender Terbatas">Tender Terbatas</option>
              <option value="Tender Umum">Tender Umum</option>
              <option value="ePurchasing">ePurchasing</option>
            </select>
          </label>

          <label>
            Target Billcomp:
            <input type="date" name="targetBillcomp" value={formData.targetBillcomp} onChange={handleInputChange} />
          </label>

          <label>
            Nomor Quote:
            <input type="text" name="nomorQuote" value={formData.nomorQuote} onChange={handleInputChange} />
          </label>

          <label>
            Alasan Keterlambatan OBL:
            <textarea name="alasanKeterlambatanOBL" value={formData.alasanKeterlambatanOBL} onChange={handleInputChange}></textarea>
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default InputUser;
