# custom_auth/migrations/0002_add_initial_admin_user.py

from django.db import migrations
from django.contrib.auth.hashers import make_password

def create_initial_admin_user(apps, schema_editor):
    Admin = apps.get_model('custom_auth', 'Admin')
    User = apps.get_model('custom_auth', 'User')
    
    # Create initial admin
    admin = Admin(
        username='admin',
        email='admin@example.com',
        first_name='Admin',
        last_name='1',
        is_staff=True,
        is_superuser=True,
        password=make_password('adminpassword123')
    )
    admin.save()
    
    desy = Admin(
        username='desyputriutami',
        email='desyputri@telkom.co.id',
        first_name='Desy',
        last_name='2',
        is_staff=True,
        is_superuser=True,
        password=make_password('desyputri123')
    )
    desy.save()


    # Create initial user
    user = User(
        witel='surabayatimur',
        email='user@example.com',
        first_name='Normal',
        last_name='User',
        password=make_password('userpassword123')
    )
    user.save()

class Migration(migrations.Migration):

    dependencies = [
        ('custom_auth', '0001_initial'),  # Adjust according to your previous migration file
    ]

    operations = [
        migrations.RunPython(create_initial_admin_user),
    ]