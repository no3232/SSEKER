from django.urls import path
from . import views

urlpatterns = [
    path('', views.projects),
    path('project/<int:project_id>', views.project_detail),
    path('project', views.project_detail),
    path('project/apply', views.apply_project),
    path('<int:project_id>/participant', views.participant),
    path('<int:project_id>/participant/<int:participant_id>', views.participant),
]