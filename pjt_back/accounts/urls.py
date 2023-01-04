from . import views
from django.urls import path

urlpatterns = [
    path('', views.peoples),
    path('<str:username>', views.people_detail),
    path('user/search', views.search),
]
