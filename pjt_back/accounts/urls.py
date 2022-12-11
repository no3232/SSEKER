from . import views
from django.urls import path


urlpatterns = [
    path('people', views.people),
    path('people/<str:username>', views.people),
    path('adpeoples', views.adpeoples),
    path('people/similarskill/<str:username>', views.similarskill),
]
