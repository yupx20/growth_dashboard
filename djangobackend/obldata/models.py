from django.db import models

class Witel(models.Model):
    nama = models.CharField(max_length=50, choices=[
        ('Surabaya Selatan', 'Surabaya Selatan'),
        ('Surabaya Utara', 'Surabaya Utara'),
        ('Denpasar', 'Denpasar'),
        ('Sidoarjo', 'Sidoarjo'),
        ('Malang', 'Malang'),
        ('Madura', 'Madura'),
        ('Pasuruan', 'Pasuruan'),
        ('Jember', 'Jember'),
        ('Kediri', 'Kediri'),
        ('Madiun', 'Madiun'),
        ('Singaraja', 'Singaraja'),
        ('NTT', 'NTT'),
        ('NTB', 'NTB')
    ])

    def __str__(self):
        return self.nama

class BUD(models.Model):
    tipe = models.CharField(max_length=50, choices=[
        ('DBS', 'DBS'),
        ('DGS', 'DGS'),
        ('DES', 'DES'),
        ('DPS (PRIVATE)', 'DPS (PRIVATE)'),
        ('DSS (SOE)', 'DSS (SOE)')
    ])

    def __str__(self):
        return self.tipe

class Mitra(models.Model):
    nama = models.CharField(max_length=100, choices=[
        ('KOPEGTEL KEDIRI', 'KOPEGTEL KEDIRI'),
        ('KOPEGTEL MALANG', 'KOPEGTEL MALANG'),
        ('KOPKAR SMART MEDIA', 'KOPKAR SMART MEDIA'),
        ('PT ADMINISTRASI MEDIKA/ADMEDIKA', 'PT ADMINISTRASI MEDIKA/ADMEDIKA'),
        ('PT DIGITAL APLIKASI SOLUSI/DIGISERV', 'PT DIGITAL APLIKASI SOLUSI/DIGISERV'),
        ('PT DWIMITRA EKATAMA MANDIRI', 'PT DWIMITRA EKATAMA MANDIRI'),
        ('PT EL-KOKAR TIMUR', 'PT EL-KOKAR TIMUR'),
        ('PT GRAHA INFORMATIKA NUSANTARA/GRATIKA', 'PT GRAHA INFORMATIKA NUSANTARA/GRATIKA'),
        ('PT GREATSOFT SOLUSI INDONESIA', 'PT GREATSOFT SOLUSI INDONESIA'),
        ('PT INFOMEDIA NUSANTARA', 'PT INFOMEDIA NUSANTARA'),
        ('PT INTEGRASI LOGISTIK CIPTA SOLUSI/ILCS', 'PT INTEGRASI LOGISTIK CIPTA SOLUSI/ILCS'),
        ('PT MADINA MITRA TEKNIK', 'PT MADINA MITRA TEKNIK'),
        ('PT METRA DIGITAL MEDIA/MD MEDIA', 'PT METRA DIGITAL MEDIA/MD MEDIA'),
        ('PT METRANET', 'PT METRANET'),
        ('PT MITRA INOVASI JAYANTARA/MINOVA', 'PT MITRA INOVASI JAYANTARA/MINOVA'),
        ('PT MULTIMEDIA NUSANTARA', 'PT MULTIMEDIA NUSANTARA'),
        ('LAINNYA', 'LAINNYA')

    ])

    def __str__(self):
        return self.nama

class JenisOBL(models.Model):
    jenis = models.CharField(max_length=50)

    def __str__(self):
        return self.jenis

class JenisPengadaan(models.Model):
    jenis = models.CharField(max_length=50)

    def __str__(self):
        return self.jenis

class JustifikasiOBL(models.Model):
    witel = models.ForeignKey(Witel, on_delete=models.CASCADE)
    bud = models.ForeignKey(BUD, on_delete=models.CASCADE)
    tahun_project = models.PositiveSmallIntegerField(choices=[
        (2023, '2023'),
        (2024, '2024')
    ])
    idlop = models.CharField(max_length=50)
    nama_pelanggan = models.CharField(max_length=100)
    judul_kb = models.CharField(max_length=255)
    nomor_kb = models.CharField(max_length=100)
    estimasi_tanggal_kb = models.DateField()
    jangka_waktu_kontrak = models.PositiveSmallIntegerField()
    start_date_kontrak = models.DateField()
    end_date_kontrak = models.DateField()
    perkiraan_nilai_kontrak = models.DecimalField(max_digits=15, decimal_places=2)
    skema_bayar = models.CharField(max_length=50, choices=[
        ('On Time Charge (OTC)', 'On Time Charge (OTC)'),
        ('Monthly Recurring Charge (MRC)', 'Monthly Recurring Charge (MRC)'),
        ('Termin', 'Termin'),
        ('DP dan Pelunasan', 'DP dan Pelunasan')
    ])
    target_delivery = models.DateField()
    pic_witel = models.CharField(max_length=255)
    jenis_obl = models.ForeignKey(JenisOBL, on_delete=models.CASCADE)
    mitra = models.ForeignKey(Mitra, on_delete=models.CASCADE)
    judul_justifikasi_obl = models.CharField(max_length=255)
    perkiraan_nilai_obl = models.DecimalField(max_digits=15, decimal_places=2)
    jenis_pengadaan = models.ForeignKey(JenisPengadaan, on_delete=models.CASCADE)
    target_billcomp = models.DateField()
    nomor_pengadaan = models.CharField(max_length=100)
    alasan_keterlambatan_pengajuan_obl = models.TextField()

    def __str__(self):
        return self.judul_justifikasi_obl