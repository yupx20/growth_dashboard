from rest_framework import viewsets
from django.http import JsonResponse
from .models import JustifikasiOBL2023, JustifikasiOBL2024
from .serializers import JustifikasiOBL2023Serializer, JustifikasiOBL2024Serializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Count

# ViewSet for JustifikasiOBL2023 and JustifikasiOBL2024
class JustifikasiOBL2023ViewSet(viewsets.ModelViewSet):
    queryset = JustifikasiOBL2023.objects.all()
    serializer_class = JustifikasiOBL2023Serializer

class JustifikasiOBL2024ViewSet(viewsets.ModelViewSet):
    queryset = JustifikasiOBL2024.objects.all()
    serializer_class = JustifikasiOBL2024Serializer

# Create view to handle POST requests
@api_view(['POST'])
def create_justifikasi_obl(request):
    tahun_project = request.data.get('tahunProject')

    if tahun_project == '2023':
        serializer = JustifikasiOBL2023Serializer(data=request.data)
    elif tahun_project == '2024':
        serializer = JustifikasiOBL2024Serializer(data=request.data)
    else:
        return Response({'error': 'Tahun project tidak valid'}, status=status.HTTP_400_BAD_REQUEST)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Project count by 'witel' for 2023 and 2024
def witel_project_count(request):
    tahun_project = request.GET.get('tahunProject')

    if tahun_project == '2023':
        data = (
            JustifikasiOBL2023.objects
            .values('witel')
            .annotate(total_projects=Count('id'))
            .order_by('witel')
        )
    elif tahun_project == '2024':
        data = (
            JustifikasiOBL2024.objects
            .values('witel')
            .annotate(total_projects=Count('id'))
            .order_by('witel')
        )
    else:
        return JsonResponse({'error': 'Tahun project tidak valid'}, status=400)

    return JsonResponse(list(data), safe=False)

from django.http import JsonResponse
from .models import JustifikasiOBL2023, JustifikasiOBL2024

def get_growth_data(request, idlop):
    # Fetch data for the specific idlop
    data_2023 = JustifikasiOBL2023.objects.filter(idlop=idlop).first()
    data_2024 = JustifikasiOBL2024.objects.filter(idlop=idlop).first()

    if not data_2023 or not data_2024:
        return JsonResponse({'error': 'Data not found'}, status=404)

    # Define variables with fallback to zero
    perkiraan_nilai_kontrak_2023 = data_2023.perkiraanNilaiKontrak or 0
    perkiraan_nilai_kontrak_2024 = data_2024.perkiraanNilaiKontrak or 0
    perkiraan_nilai_pekerjaan_2023 = data_2023.perkiraanNilaiPekerjaan or 0
    perkiraan_nilai_pekerjaan_2024 = data_2024.perkiraanNilaiPekerjaan or 0

    # Growth Revenue and Growth OBL calculations
    growth_revenue = (
        (perkiraan_nilai_kontrak_2024 - perkiraan_nilai_kontrak_2023) / 
        perkiraan_nilai_kontrak_2023 if perkiraan_nilai_kontrak_2023 else 0
    )

    growth_obl = (
        (perkiraan_nilai_pekerjaan_2024 - perkiraan_nilai_pekerjaan_2023) / 
        perkiraan_nilai_pekerjaan_2023 if perkiraan_nilai_pekerjaan_2023 else 0
    )

    # Prepare the response
    response_data = {
        'idlop': idlop,
        'judulJustifikasiOBL': data_2023.judulJustifikasiOBL,
        'komposisi_cpe_2023': (
            perkiraan_nilai_pekerjaan_2023 / perkiraan_nilai_kontrak_2023 if perkiraan_nilai_kontrak_2023 else 0
        ),
        'komposisi_cpe_2024': (
            perkiraan_nilai_pekerjaan_2024 / perkiraan_nilai_kontrak_2024 if perkiraan_nilai_kontrak_2024 else 0
        ),
        'growth_revenue': growth_revenue,
        'growth_obl': growth_obl,
        'witelNames': data_2023.witel,  # Example of witel names
        'nilaiKB2023': perkiraan_nilai_kontrak_2023,
        'nilaiKB2024': perkiraan_nilai_kontrak_2024,
        'nilaiOBL2023': perkiraan_nilai_pekerjaan_2023,
        'nilaiOBL2024': perkiraan_nilai_pekerjaan_2024,
    }

    return JsonResponse(response_data)

@api_view(['GET'])
def combined_justifikasi_by_idlop(request):
    # Get all idlop from both models
    idlops_2023 = JustifikasiOBL2023.objects.values_list('idlop', flat=True)
    idlops_2024 = JustifikasiOBL2024.objects.values_list('idlop', flat=True)

    # Get unique idlops present in both years
    common_idlops = set(idlops_2023).intersection(idlops_2024)

    combined_data = []

    # Iterate over each idlop and fetch data from both models
    for idlop in common_idlops:
        data_2023 = JustifikasiOBL2023.objects.filter(idlop=idlop).first()
        data_2024 = JustifikasiOBL2024.objects.filter(idlop=idlop).first()

        combined_data.append({
            'idlop': idlop,
            'witel': data_2023.witel,
            'namaPelanggan': data_2023.namaPelanggan,
            'judulKontrakKB': data_2023.judulKontrakKB,
            'nomorKontrakKB': data_2023.nomorKontrakKB,
            'estimasiTanggalKB': data_2023.estimasiTanggalKB,
            'jangkaWaktuKontrak': data_2023.jangkaWaktuKontrak,
            'startDateKontrak': data_2023.startDateKontrak,
            'endDateKontrak': data_2023.endDateKontrak,
            'skemaBayarPelanggan': data_2023.skemaBayarPelanggan,
            'targetDelivery': data_2023.targetDelivery,
            'picWitel': data_2023.picWitel,
            'jenisOBL': data_2023.jenisOBL,
            'mitra': data_2023.mitra,
            'judulJustifikasiOBL': data_2023.judulJustifikasiOBL,
            'jenisPengadaan': data_2023.jenisPengadaan,
            'targetBillcomp': data_2023.targetBillcomp,
            'nomorQuote': data_2023.nomorQuote,
            'alasanKeterlambatanOBL': data_2023.alasanKeterlambatanOBL,
            'perkiraanNilaiKontrak_2023': data_2023.perkiraanNilaiKontrak,
            'perkiraanNilaiPekerjaan_2023': data_2023.perkiraanNilaiPekerjaan,
            'perkiraanNilaiKontrak_2024': data_2024.perkiraanNilaiKontrak,
            'perkiraanNilaiPekerjaan_2024': data_2024.perkiraanNilaiPekerjaan,
        })

    return Response(combined_data)

def get_existing_data(request, idlop):
    try:
        # Cari data dari tahun 2023 berdasarkan idlop
        data_2023 = JustifikasiOBL2023.objects.get(idlop=idlop, tahunProject=2023)
        
        # Siapkan data untuk dikirim kembali ke form
        data = {
            'witel': data_2023.witel,
            'bud': data_2023.bud,
            'tahunProject': data_2023.tahunProject,
            'idlop': data_2023.idlop,
            'namaPelanggan': data_2023.namaPelanggan,
            'judulKontrakKB': data_2023.judulKontrakKB,
            'nomorKontrakKB': data_2023.nomorKontrakKB,
            'estimasiTanggalKB': data_2023.estimasiTanggalKB,
            'jangkaWaktuKontrak': data_2023.jangkaWaktuKontrak,
            'startDateKontrak': data_2023.startDateKontrak,
            'endDateKontrak': data_2023.endDateKontrak,
            'perkiraanNilaiKontrak': data_2023.perkiraanNilaiKontrak,
            'skemaBayarPelanggan': data_2023.skemaBayarPelanggan,
            'targetDelivery': data_2023.targetDelivery,
            'picWitel': data_2023.picWitel,
            'jenisOBL': data_2023.jenisOBL,
            'mitra': data_2023.mitra,
            'judulJustifikasiOBL': data_2023.judulJustifikasiOBL,
            'perkiraanNilaiPekerjaan': data_2023.perkiraanNilaiPekerjaan,
            'jenisPengadaan': data_2023.jenisPengadaan,
            'targetBillcomp': data_2023.targetBillcomp,
            'nomorQuote': data_2023.nomorQuote,
            'alasanKeterlambatanOBL': data_2023.alasanKeterlambatanOBL,
        }
        return JsonResponse(data)
    except JustifikasiOBL2023.DoesNotExist:
        return JsonResponse({'error': 'Data not found'}, status=404)
    
    