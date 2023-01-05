from . import views
from django.urls import path

urlpatterns = [
    path('', views.objects),
    path('skill-language', views.get_skill_language)
]
