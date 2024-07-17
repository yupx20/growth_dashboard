from django.contrib import admin
from django.urls import path, include
from custom_auth.views import AdminLoginView, LogoutView, UserLoginView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/admin/', AdminLoginView.as_view(), name='admin-login'),
    path('login/user/', UserLoginView.as_view(), name='user-login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]