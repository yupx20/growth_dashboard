import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styling/Input.css';

const InputUser = ({ socket, user, adminName}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [greeting, setGreeting] = useState('');
  const [userName, setUserName] = useState('');
  const [submit ,setSubmit] = useState('');


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

  const handleSubmit = (type) => {
    type.preventDefault();
    alert("Data submitted");
    socket.emit("sendNotification", submit);
    setSubmit('');
  };

  return (
    <>
      <div className="background"></div>
      <div className="new-page">
        <h3>{`${greeting}, ${userName}`}</h3>
        {/* <p>Silahkan mengisi form berikut:</p> */}
        <form onSubmit={handleSubmit}>
          <label>
            Witel:
            <select>
              <option value="">Pilih</option>
              <option value="">Surabaya Selatan</option>
              <option value="">Surabaya Utara</option>
              <option value="">Denpasar</option>
              <option value="">Sidoarjo</option>
              <option value="">Malang</option>
              <option value="">Madura</option>
              <option value="">Pasuruan</option>
              <option value="">Jember</option>
              <option value="">Kediri</option>
              <option value="">Madiun</option>
              <option value="">Singaraja</option>
              <option value="">NTT</option>
              <option value="">NTB</option>
            </select>
          </label>

          <label>
            BUD:
            <select>
              <option value="">Pilih</option>
              <option value="">DBS</option>
              <option value="">DGS</option>
              <option value="">DES</option>
              <option value="">DPS (Private)</option>
              <option value="">DSS (SOE)</option>
            </select>
          </label>

          <label>
            Tahun project:
            <select>
              <option value="">Pilih</option>
              <option value="">2024</option>
              <option value="">2023</option>
            </select>
          </label>

          <label>
            IDLOP:
            <input type="text" name="idlop" />
          </label>

          <label>
            Nama Pelanggan:
            <input type="text" name="namaPelanggan" />
          </label>

          <label>
            Judul Kontrak KB:
            <input type="text" name="judulKontrakKB" />
          </label>

          <label>
            Nomor kontrak KB:
            <input type="text" name="nomorKontrakKB" />
          </label>

          <label>
            Estimasi tanggal KB:
            <input type="date" name="estimasiTanggalKB" />
          </label>

          <label>
            Jangka waktu kontrak:
            <input type="text" name="jangkaWaktuKontrak" />
          </label>

          <label>
            Start Date Kontrak:
            <input type="date" name="startDateKontrak" />
          </label>

          <label>
            End Date Kontrak:
            <input type="date" name="endDateKontrak" />
          </label>

          <label>
            Skema Bayar Pelanggan:
            <select>
              <option value="">Pilih</option>
              <option value="">One Time Charge (OTC)</option>
              <option value="">Monthly Recurring Charge (MRC)</option>
              <option value="">Termin</option>
              <option value="">DP dan Pelunasan</option>
            </select>
          </label>

          <label>
            Target Delivery:
            <input type="date" name="targetDelivery" />
          </label>

          <label>
            PIC Witel:
            <input type="text" name="picWitel" />
          </label>

          <label>
            Jenis OBL:
            <select>
              <option value="">Pilih</option>
              <option value="">KL</option>
              <option value="">WO</option>
              <option value="">SP</option>
            </select>
          </label>

          <label>
            Mitra:
            <select>
              <option value="">Pilih</option>
              <option value="">KOPEGTEL KEDIRI</option>
              <option value="">KOPEGTEL MALANG</option>
              <option value="">KOPKAR SMART MEDIA</option>
              <option value="">PT ADMINISTRASI MEDIKA / ADMEDIKA</option>
              <option value="">PT DIGITAL APLIKASI SOLUSI/DIGISERV</option>
              <option value="">PT DWIMITRA EKATAMA MANDIRI</option>
              <option value="">PT EL-KOKAR TIMUR</option>
              <option value="">PT GRAHA INFORMATIKA NUSANTARA/GRATIKA</option>
              <option value="">PT GREATSOFT SOLUSI INDONESIA</option>
              <option value="">PT INFOMEDIA NUSANTARA</option>
              <option value="">PT INTEGRASI LOGISTIK CIPTA SOLUSI/ ILCS</option>
              <option value="">PT MADINA MITRA TEKNIK</option>
              <option value="">PT METRANET</option>
              <option value="">PT METRA DIGITAL MEDIA/ MD MEDIA</option>
              <option value="">PT MITRA INOVASI JAYANTARA/MINOVA</option>
              <option value="">PT MULTIMEDIA NUSANTARA</option>
              <option value="">PT PINS INDONESIA</option>
              <option value="18">PT PRIMA AKSES SOLUSI GLOBAL</option>
              <option value="19">PT SANDHY PUTRA MAKMUR</option>
              <option value="20">PT SIGMA CIPTA CARAKA</option>
              <option value="21">PT SIGMA METRASYS SOLUTION</option>
              <option value="22">PT SISTELINDO MITRALINTAS</option>
              <option value="23">PT SKILL NUSA INFOTAMA</option>
              <option value="24">PT SUMBERSOLUSINDO HITECH</option>
              <option value="25">PT TELEKOMUNIKASI SELULER</option>
              <option value="26">PT TELKOM AKSES/TA</option>
              <option value="27">PT TELKOM PRIMA CIPTA CERTIFIA/TPCC</option>
              <option value="28">PT TELKOM SATELIT INDONESIA/TELKOMSAT</option>
              <option value="29">PT TERA DATA INDONUSA</option>
              <option value="30">PT WAHANA CIPTASINATRIA/WCS</option>
              <option value="31">LAINNYA</option>
            </select>
          </label>

          <label>
            Judul Justifikasi OBL:
            <input type="text" name="judulJustifikasiOBL" />
          </label>

          <label>
            Perkiraan Nilai Pekerjaan:
            <input type="text" name="perkiraanNilaiPekerjaan" />
          </label>

          <label>
            Jenis Pengadaan:
            <select>
              <option value="">Select Jenis Pengadaan</option>
            </select>
          </label>

          <label>
            Target Billcomp:
            <input type="date" name="targetBillcomp" />
          </label>

          <label>
            Nomor Quote:
            <input type="text" name="nomorQuote" />
          </label>

          <label>
            Alasan Keterlambatan Pengajuan OBL:
            <input type="text" name="alasanKeterlambatanOBL" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default InputUser;
