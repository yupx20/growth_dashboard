import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styling/Input.css';

const InputUser = ({socket}) => {
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

  // State untuk menangani error
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};

    // Validasi untuk fields tipe CharField
    const charFields = ['witel', 'bud', 'tahunProject', 'idlop', 'namaPelanggan', 'judulKontrakKB', 'nomorKontrakKB', 'jangkaWaktuKontrak', 'skemaBayarPelanggan', 'picWitel', 'jenisOBL', 'mitra', 'judulJustifikasiOBL', 'jenisPengadaan', 'nomorQuote'];
    charFields.forEach(field => {
      if (!formData[field] || formData[field].length === 0) {
        newErrors[field] = 'This field is required';
      }
    });

    // Validasi tahunProject (harus berupa tahun 4 digit)
    if (formData.tahunProject && !/^\d{4}$/.test(formData.tahunProject)) {
      newErrors.tahunProject = 'Enter a valid 4-digit year';
    }

    // Validasi untuk fields tipe DateField
    const dateFields = ['estimasiTanggalKB', 'startDateKontrak', 'endDateKontrak', 'targetDelivery', 'targetBillcomp'];
    dateFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    // Validasi untuk DecimalField (perkiraanNilaiPekerjaan)
    if (formData.perkiraanNilaiPekerjaan && !/^\d+(\.\d{1,2})?$/.test(formData.perkiraanNilaiPekerjaan)) {
      newErrors.perkiraanNilaiPekerjaan = 'Enter a valid decimal number with up to 2 decimal places';
    }

    if (formData.perkiraanNilaiKontrak && !/^\d+(\.\d{1,2})?$/.test(formData.perkiraanNilaiKontrak)) {
      newErrors.perkiraanNilaiKontrak = 'Enter a valid decimal number with up to 2 decimal places';
    }

    // Set errors state
    setErrors(newErrors);

    // Mengembalikan true jika tidak ada error
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
       // Emit data to the server using socket
       socket.emit("sendNotification", formData);
       setFormData('');
      fetch('http://localhost:8000/api/create-justifikasi-obl/', {
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
          // Reset form setelah submit
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
            perkiraanNilaiKontrak: '',
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
          setErrors({});
        })
        .catch((error) => {
          console.error('Error:', error);
          alert("Failed to submit data");
        });
    } else {
      alert("Please fill in the required fields!");
    }
  };

  return (
    <>
      <div className="background"></div>
      <div className="new-page">
        <h3>{`${greeting}, ${userName}`}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Witel Lama:
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
            {errors.witel && <p className="error">{errors.witel}</p>}
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
            {errors.bud && <p className="error">{errors.bud}</p>}
          </label>

          <label>
            Tahun Project:
            <select name="tahunProject" value={formData.tahunProject} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
            {errors.tahunProject && <p className="error">{errors.tahunProject}</p>}
          </label>

          <label>
            IDLOP:
            <p>Isikan dengan benar ID LOP yg Valid, ID LOP 0 dan (-) tidak dapat diproses OBL.</p>
            <input type="text" name="idlop" value={formData.idlop} onChange={handleInputChange} />
            {errors.idlop && <p className="error">{errors.idlop}</p>}
          </label>

          <label>
            Nama Pelanggan:
            <input type="text" name="namaPelanggan" value={formData.namaPelanggan} onChange={handleInputChange} />
            {errors.namaPelanggan && <p className="error">{errors.namaPelanggan}</p>}
          </label>

          <label>
            Judul Kontrak KB:
            <input type="text" name="judulKontrakKB" value={formData.judulKontrakKB} onChange={handleInputChange} />
            {errors.judulKontrakKB && <p className="error">{errors.judulKontrakKB}</p>}
          </label>

          <label>
            Nomor Kontrak KB:
            <p>Isikan jika sudah ada. (Penulisan tanpa spasi)</p>
            <input type="text" name="nomorKontrakKB" value={formData.nomorKontrakKB} onChange={handleInputChange} />
            {errors.nomorKontrakKB && <p className="error">{errors.nomorKontrakKB}</p>}
          </label>

          <label>
            Estimasi Tanggal KB:
            <input type="date" name="estimasiTanggalKB" value={formData.estimasiTanggalKB} onChange={handleInputChange} />
            {errors.estimasiTanggalKB && <p className="error">{errors.estimasiTanggalKB}</p>}
          </label>

          <label>
            Jangka Waktu Kontrak:
            <p>(Bulan)</p>
            <input type="number" name="jangkaWaktuKontrak" value={formData.jangkaWaktuKontrak} onChange={handleInputChange} />
            {errors.jangkaWaktuKontrak && <p className="error">{errors.jangkaWaktuKontrak}</p>}
          </label>

          <label>
            Start Date Kontrak:
            <input type="date" name="startDateKontrak" value={formData.startDateKontrak} onChange={handleInputChange} />
            {errors.startDateKontrak && <p className="error">{errors.startDateKontrak}</p>}
          </label>

          <label>
            End Date Kontrak:
            <input type="date" name="endDateKontrak" value={formData.endDateKontrak} onChange={handleInputChange} />
            {errors.endDateKontrak && <p className="error">{errors.endDateKontrak}</p>}
          </label>

          <label>
            Perkiraan Nilai Kontrak:
            <p>(exc. PPN)</p>
            <input type="number" name="perkiraanNilaiKontrak" value={formData.perkiraanNilaiKontrak} onChange={handleInputChange} />
            {errors.perkiraanNilaiKontrak && <p className="error">{errors.perkiraanNilaiKontrak}</p>}
          </label>

          <label>
            Skema Bayar Pelanggan:
            <select name="skemaBayarPelanggan" value={formData.skemaBayarPelanggan} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="OTC">One Time Charge (OTC)</option>
              <option value="MRC">Monthly Recurring Charge (MRC)</option>
              <option value="Termin">Termin</option>
              <option value="DP">DP & Pelunasan</option>
            </select>
            {errors.skemaBayarPelanggan && <p className="error">{errors.skemaBayarPelanggan}</p>}
          </label>

          <label>
            Target Delivery:
            <input type="date" name="targetDelivery" value={formData.targetDelivery} onChange={handleInputChange} />
            {errors.targetDelivery && <p className="error">{errors.targetDelivery}</p>}
          </label>

          <label>
            PIC Witel:
            <p>(NAMA AM - EMAIL - NO HP)</p>
            <input type="text" name="picWitel" value={formData.picWitel} onChange={handleInputChange} />
            {errors.picWitel && <p className="error">{errors.picWitel}</p>}
          </label>

          <label>
            Jenis OBL:
            <p>
              (1) Standar Dengan Kontrak Layanan / KL<br/>
              (2) Work Order / WO - Khusus untuk layanan yang ada tertera pada PKS antara Telkom dan Mitra (Cek PKS di web <a href="https://newgobeyond.mytens.co.id/" target="_blank">newgobeyond.mytens.co.id</a>)<br/>
              (3) Surat Pesanan / SP - Untuk layanan umum dan nilai under 100juta, seperti pembelian barang yg bisa dicek penjualan umum
            </p>
            <select name="jenisOBL" value={formData.jenisOBL} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="KL">KL</option>
              <option value="WO">WO</option>
              <option value="SP">SP</option>
            </select>
            {errors.jenisOBL && <p className="error">{errors.jenisOBL}</p>}
          </label>

          <label>
            Mitra:
            <select name="mitra" value={formData.mitra} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="KOPEGTEL KEDIRI">KOPEGTEL KEDIRI</option>
              <option value="KOPEGTEL MALANG">KOPEGTEL MALANG</option>
              <option value="KOPKAR SMART MEDIA">KOPKAR SMART MEDIA</option>
              <option value="PT ADMINISTRASI MEDIKA/ADMEDIKA">PT ADMINISTRASI MEDIKA/ADMEDIKA</option>
              <option value="PT DIGITAL APLIKASI SOLUSI/ DIGISERV">PT DIGITAL APLIKASI SOLUSI/ DIGISERV</option>
              <option value="PT DWIMITRA EKATAMA MANDIRI">PT DWIMITRA EKATAMA MANDIRI</option>
              <option value="PT EL-KOKAR TIMUR">PT EL-KOKAR TIMUR</option>
              <option value="PT GRAHA INFORMATIKA NUSANTARA/ GRATIKA">PT GRAHA INFORMATIKA NUSANTARA/ GRATIKA</option>
              <option value="PT GREATSOFT SOLUSI INDONESIA">PT GREATSOFT SOLUSI INDONESIA</option>
              <option value="PT INFOMEDIA NUSANTARA">PT INFOMEDIA NUSANTARA</option>
              <option value="PT INTEGRASI LOGISTIK CIPTA SOLUSI/ILCS">PT INTEGRASI LOGISTIK CIPTA SOLUSI/ILCS</option>
              <option value="PT MADINA MITRA TEKNIK">PT MADINA MITRA TEKNIK</option>
              <option value="PT METRA DIGITAL MEDIA/ MD MEDIA">PT METRA DIGITAL MEDIA/ MD MEDIA</option>
              <option value="PT METRANET">PT METRANET</option>
              <option value="PT MITRA INOVASI JAYANTARA/MINOVA">PT MITRA INOVASI JAYANTARA/MINOVA</option>
              <option value="PT MULTIMEDIA NUSANTARA">PT MULTIMEDIA NUSANTARA</option>
              <option value="PT PINS INDONESIA">PT PINS INDONESIA</option>
              <option value="PT PRIMA AKSES SOLUSI GLOBAL">PT PRIMA AKSES SOLUSI GLOBAL</option>
              <option value="PT SANDHY PUTRA MAKMUR">PT SANDHY PUTRA MAKMUR</option>
              <option value="PT SIGMA CIPTA CARAKA">PT SIGMA CIPTA CARAKA</option>
              <option value="PT SIGMA METRASYS SOLUTION">PT SIGMA METRASYS SOLUTION</option>
              <option value="PT SISTELINDO MITRALINTAS">PT SISTELINDO MITRALINTAS</option>
              <option value="PT SKILL NUSA INFOTAMA">PT SKILL NUSA INFOTAMA</option>
              <option value="PT SUMBERSOLUSINDO HITECH">PT SUMBERSOLUSINDO HITECH</option>
              <option value="PT TELEKOMUNIKASI SELULER">PT TELEKOMUNIKASI SELULER</option>
              <option value="PT TELKOM AKSES/TA">PT TELKOM AKSES/TA</option>
              <option value="PT TELKOM PRIMA CIPTA CERTIFIA/TPCC">PT TELKOM PRIMA CIPTA CERTIFIA/TPCC</option>
              <option value="PT TELKOM SATELIT INDONESIA/ TELKOMSAT">PT TELKOM SATELIT INDONESIA/ TELKOMSAT</option>
              <option value="PT TERA DATA INDONUSA">PT TERA DATA INDONUSA</option>
              <option value="PT WAHANA CIPTASINATRIA/WCS">PT WAHANA CIPTASINATRIA/WCS</option>
              <option value="LAINNYA">LAINNYA</option>
            </select>
            {errors.mitra && <p className="error">{errors.mitra}</p>}
          </label>

          <label>
            Judul Justifikasi OBL:
            <input type="text" name="judulJustifikasiOBL" value={formData.judulJustifikasiOBL} onChange={handleInputChange} />
            {errors.judulJustifikasiOBL && <p className="error">{errors.judulJustifikasiOBL}</p>}
          </label>

          <label>
            Perkiraan Nilai Pekerjaan/OBL:
            <p>(exc. PPN)</p>
            <input type="number" name="perkiraanNilaiPekerjaan" value={formData.perkiraanNilaiPekerjaan} onChange={handleInputChange} />
            {errors.perkiraanNilaiPekerjaan && <p className="error">{errors.perkiraanNilaiPekerjaan}</p>}
          </label>

          <label>
            Jenis Pengadaan:
            <p>PL baik penunjukan langsung maupun pengadaan langsung</p>
            <select name="jenisPengadaan" value={formData.jenisPengadaan} onChange={handleInputChange}>
              <option value="">Pilih</option>
              <option value="PL Online">PL Online</option>
              <option value="PL Offline">PL Offline</option>
              <option value="Tender Cepat">Tender Cepat</option>
              <option value="E-Katalog">E-Katalog</option>
            </select>
            {errors.jenisPengadaan && <p className="error">{errors.jenisPengadaan}</p>}
          </label>

          <label>
            Target Billcomp:
            <input type="date" name="targetBillcomp" value={formData.targetBillcomp} onChange={handleInputChange} />
            {errors.targetBillcomp && <p className="error">{errors.targetBillcomp}</p>}
          </label>

          <label>
            Nomor Quote:
            <input type="text" name="nomorQuote" value={formData.nomorQuote} onChange={handleInputChange} />
            {errors.nomorQuote && <p className="error">{errors.nomorQuote}</p>}
          </label>

          <label>
            Alasan Keterlambatan OBL:
            <p>(Lebih dari 3 bulan setelah tanggal KB)</p>
            <textarea name="alasanKeterlambatanOBL" value={formData.alasanKeterlambatanOBL} onChange={handleInputChange} />
            {errors.alasanKeterlambatanOBL && <p className="error">{errors.alasanKeterlambatanOBL}</p>}
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default InputUser;