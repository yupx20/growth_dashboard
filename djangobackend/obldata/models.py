from django.db import models

class JustifikasiOBL(models.Model):
    witel = models.CharField(max_length=100)
    bud = models.CharField(max_length=100)
    tahunProject = models.CharField(max_length=4)
    idlop = models.CharField(max_length=50)
    namaPelanggan = models.CharField(max_length=255)
    judulKontrakKB = models.CharField(max_length=255)
    nomorKontrakKB = models.CharField(max_length=100)
    estimasiTanggalKB = models.DateField()
    jangkaWaktuKontrak = models.CharField(max_length=100)
    startDateKontrak = models.DateField()
    endDateKontrak = models.DateField()
    skemaBayarPelanggan = models.CharField(max_length=100)
    targetDelivery = models.DateField()
    picWitel = models.CharField(max_length=100)
    jenisOBL = models.CharField(max_length=50)
    mitra = models.CharField(max_length=100)
    judulJustifikasiOBL = models.CharField(max_length=255)
    perkiraanNilaiPekerjaan = models.DecimalField(max_digits=15, decimal_places=2)
    jenisPengadaan = models.CharField(max_length=100)
    targetBillcomp = models.DateField()
    nomorQuote = models.CharField(max_length=100)
    alasanKeterlambatanOBL = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.judulJustifikasiOBL