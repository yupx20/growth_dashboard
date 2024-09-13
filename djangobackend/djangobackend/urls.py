from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from custom_auth.views import AdminLoginView, LogoutView, UserLoginView
from obldata.views import JustifikasiOBLViewSet, create_justifikasi_obl, witel_project_count, get_growth_data

router = DefaultRouter()
router.register(r'justifikasi-obl', JustifikasiOBLViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/admin/', AdminLoginView.as_view(), name='admin-login'),
    path('login/user/', UserLoginView.as_view(), name='user-login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('api/', include(router.urls)),
    path('api/justifikasi-obl/', create_justifikasi_obl, name='create_justifikasi_obl'),
    path('api/witel-project-count/', witel_project_count, name='witel-project-count'),
    path('api/growth-data/', get_growth_data, name='get_growth_data')
]