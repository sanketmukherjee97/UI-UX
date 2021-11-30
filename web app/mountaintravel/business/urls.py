from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('mountain/<str: name>', views.tourMemories, name='memories'),
]
