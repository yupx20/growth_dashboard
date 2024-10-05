from rest_framework import serializers
from .models import JustifikasiOBL2023, JustifikasiOBL2024

class JustifikasiOBL2023Serializer(serializers.ModelSerializer):
    class Meta:
        model = JustifikasiOBL2023
        fields = '__all__'

class JustifikasiOBL2024Serializer(serializers.ModelSerializer):
    class Meta:
        model = JustifikasiOBL2024
        fields = '__all__'