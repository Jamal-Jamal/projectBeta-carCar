from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href= models.CharField(max_length=100, null=True, unique=True)
    vin = models.CharField(max_length=17, unique=True)

class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveIntegerField(null=True, unique=True)
    def __str__(self):
         return self.name

    def get_api_url(self):
        return reverse("api_list_technician", kwargs={"pk": self.pk})

class Appointment(models.Model):
    vin_num = models.CharField(max_length=17)
    owner = models.CharField(max_length=200)
    date = models.DateField(null=True)
    time = models.TimeField(null=True)
    technician = models.ForeignKey("Technician", related_name="technician", on_delete=models.PROTECT)
    reason = models.TextField()
    is_finished = models.BooleanField(default=False)
    is_vip = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.owner} {self.vin_num}"
