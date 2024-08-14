from rest_framework import serializers
from .models import JustifikasiOBL

class JustifikasiOBLSerializer(serializers.ModelSerializer):
    class Meta:
        model = JustifikasiOBL
        fields = '__all__'
