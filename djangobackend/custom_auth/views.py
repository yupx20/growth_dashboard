from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from custom_auth.models import Admin
from .serializers import AdminSerializer, UserSerializer
from django.contrib.auth import authenticate, logout

class AdminLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user and isinstance(user, Admin):
            serializer = AdminSerializer(user)
            return Response({'status': True, 'message': 'Login successful', 'data': serializer.data})
        return Response({'status': False, 'message': 'Invalid credentials or not an admin'}, status=401)

class UserLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        witel = request.data.get('witel')
        password = request.data.get('password')
        user = authenticate(request, username=witel, password=password)
        
        if user:
            serializer = UserSerializer(user)
            return Response({'status': True, 'message': 'Login successful', 'data': serializer.data})
        return Response({'status': False, 'message': 'Invalid credentials'}, status=401)
    
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({'status': True, 'message': 'Logged out successfully'})