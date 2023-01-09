from . import views
from django.urls import path

urlpatterns = [
    path('', views.peoples),
    path('<int:user_id>', views.people_detail),
    path('user/search', views.search),
    path('user/recommend-users', views.recommend_users)
]
