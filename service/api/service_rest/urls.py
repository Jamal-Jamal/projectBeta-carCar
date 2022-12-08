from django.urls import path
from .views import api_list_appointments, api_list_technician, api_show_appointment

urlpatterns = [
    path('technicians/', api_list_technician, name="api_technicians"),
    path('appointments/', api_list_appointments, name="api_appointments"),
    path('appointments/<int:pk>/', api_show_appointment, name="api_detail_appointment"),
]
