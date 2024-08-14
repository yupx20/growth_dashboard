from rest_framework import viewsets
from .models import JustifikasiOBL
from .serializers import JustifikasiOBLSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

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