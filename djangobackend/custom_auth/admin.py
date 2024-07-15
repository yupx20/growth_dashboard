from django.contrib import admin
from .models import Admin, User

class AdminAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')

class UserAdmin(admin.ModelAdmin):
    list_display = ('witel', 'email', 'first_name', 'last_name')

admin.site.register(Admin, AdminAdmin)
admin.site.register(User, UserAdmin)
