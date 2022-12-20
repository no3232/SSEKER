from . import views
from django.urls import path

urlpatterns = [
    path('', views.peoples),
    path('<str:skill_category>', views.peoples),
    path('people', views.people),
    path('people/<str:username>', views.people),
]
