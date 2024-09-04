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

def get_project_count_per_witel(request):
    # Menghitung jumlah proyek (berdasarkan id) untuk setiap witel
    project_count = (
        JustifikasiOBL.objects
        .values('witel')
        .annotate(count=Count('id'))
        .order_by('witel')
    )
    
    # Format data untuk dikirimkan ke frontend
    data = {
        'labels': [entry['witel'] for entry in project_count],
        'data': [entry['count'] for entry in project_count],
    }
    
    return JsonResponse(data)