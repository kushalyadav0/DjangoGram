from django.urls import path
from . import views

urlpatterns = [
    path('lobby/', views.lobby), 
    path('chat/<str:room_name>/', views.chat,name='room')
]
