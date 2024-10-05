from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from custom_auth.views import AdminLoginView, LogoutView, UserLoginView
from obldata.views import JustifikasiOBL2023ViewSet, JustifikasiOBL2024ViewSet, create_justifikasi_obl, witel_project_count, get_growth_data, combined_justifikasi_by_idlop, get_existing_data

router = DefaultRouter()
router.register('justifikasi2023', JustifikasiOBL2023ViewSet)
router.register('justifikasi2024', JustifikasiOBL2024ViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/admin/', AdminLoginView.as_view(), name='admin-login'),
    path('login/user/', UserLoginView.as_view(), name='user-login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('api/', include(router.urls)),
    path('api/get-existing-data/<str:idlop>/', get_existing_data, name='get_existing_data'),
    path('api/create-justifikasi-obl/', create_justifikasi_obl, name='create-justifikasi-obl'),
    path('api/witel-project-count/', witel_project_count, name='witel-project-count'),
    path('api/get-growth-data/<str:idlop>/', get_growth_data, name='get-growth-data'),
    path('api/combined-justifikasi-by-idlop/', combined_justifikasi_by_idlop, name='combined_justifikasi_by_idlop')
]