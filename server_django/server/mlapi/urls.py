from django.urls import path
from .views import process_video

urlpatterns = [
    path('api/process-video/', process_video, name='process_video'),
]