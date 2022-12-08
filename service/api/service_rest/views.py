from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, Technician, Appointment
from common.json import ModelEncoder
import json


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties=['vin']

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        'id',
        'name',
        'employee_number'
        ]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        'id',
        'vin_num',
        'owner',
        'date',
        'time',
        'reason',
        'technician',
        'is_vip',
        'is_finished'
        ]
    encoders ={
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self,o):
        return {"technician": o.technician.name}

class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        'id',
        'vin_num',
        'owner',
        'date',
        'time',
        'reason',
        'technician',
        'is_vip',
        'is_finished'
        ]
    encoders ={
        "technician": TechnicianEncoder()
    }

    def get_extra_data(self,o):
        return {"technician": o.technician.name}



@require_http_methods(["GET","POST"])
def api_list_technician(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        # print(technicians)
        return JsonResponse(
            {"technicians":technicians},
            encoder=TechnicianEncoder,
            safe=False
        )
    else: #POST
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False
        )

@require_http_methods(["GET","POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
            safe=False
        )
    else: #POST
        content = json.loads(request.body)
        # print(content)
        technician = Technician.objects.get(id=content["technician"])
        content["technician"] = technician
        try:
            vin_new=content["vin_num"]
            AutomobileVO.objects.get(vin=vin_new)
            content["is_vip"] = True
        except AutomobileVO.DoesNotExist:
            content["is_vip"] = False

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
          appointment,
          encoder=AppointmentListEncoder,
          safe=False
        )

@require_http_methods(["DELETE","GET","PUT"])
def api_show_appointment(request,pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment, encoder=AppointmentDetailEncoder, safe=False
        )

    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse( appointment, encoder=AppointmentDetailEncoder, safe=False,)
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        content = json.loads(request.body)
        # print(content)
        appointment = Appointment.objects.get(id=pk)

        Appointment.objects.filter(id=pk).update(**content)
        appointment = Appointment.objects.get(id=pk)

        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )
