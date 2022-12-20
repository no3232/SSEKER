from django.urls import path
from . import views

urlpatterns = [
    path('', views.projects),
    path('project/<int:project_id>', views.projects),
    path('project', views.project_detail),
]