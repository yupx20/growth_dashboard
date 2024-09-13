from rest_framework import viewsets
from django.http import JsonResponse
from .models import JustifikasiOBL
from .serializers import JustifikasiOBLSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Count

class JustifikasiOBLViewSet(viewsets.ModelViewSet):
    queryset = JustifikasiOBL.objects.all()
    serializer_class = JustifikasiOBLSerializer

@api_view(['POST'])
def create_justifikasi_obl(request):
    if request.method == 'POST':
        serializer = JustifikasiOBLSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def witel_project_count(request):
    data = (
        JustifikasiOBL.objects
        .values('witel')
        .annotate(total_projects=Count('id'))
        .order_by('witel')
    )
    return JsonResponse(list(data), safe=False)

def get_growth_data(request):
    data = []
    justifikasi_list = JustifikasiOBL.objects.all()
    
    for justifikasi in justifikasi_list:
        if justifikasi.perkiraanNilaiKontrak != 0:
            ratio = (justifikasi.perkiraanNilaiPekerjaan / justifikasi.perkiraanNilaiKontrak) * 100
        else:
            ratio = 0  # Avoid division by zero
        
        data.append({
            'judul': justifikasi.judulJustifikasiOBL,
            'perkiraan_nilai_pekerjaan': float(justifikasi.perkiraanNilaiPekerjaan),
            'perkiraan_nilai_kontrak': float(justifikasi.perkiraanNilaiKontrak),
            'ratio': float(ratio)
        })
    
    return JsonResponse(data, safe=False)