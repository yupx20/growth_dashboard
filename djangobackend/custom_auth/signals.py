from django.contrib.auth.signals import user_logged_in, user_login_failed
from django.dispatch import receiver
from django.contrib import messages

@receiver(user_logged_in)
def log_user_login(sender, request, user, **kwargs):
    if request is not None:
        messages.error(request, "Login attempt unsuccessful. Please check your credentials.")

@receiver(user_login_failed)
def log_user_login_failed(sender, credentials, request, **kwargs):
    if request is not None:
        messages.error(request, "Login attempt unsuccessful. Please check your credentials.")