from django.contrib import admin
from .models import Technician

@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass


