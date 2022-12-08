from django.urls import path

from .views import (
    api_salespeople,
    api_salesperson,
    api_customers,
    api_customer,
    api_salesrecords,
    api_automobile_vos,
    api_salesrecord,
    )

urlpatterns = [
    path("salespeople/", api_salespeople, name="api_salespeople"),
    path("salespeople/<int:pk>/", api_salesperson, name="api_salesperson"),
    path("customers/", api_customers, name="api_customers"),
    path("customers/<int:pk>/", api_customer, name="api_customer"),
    path("salesrecords/", api_salesrecords, name="api_salesrecords"),
    path("salesrecords/<int:pk>/", api_salesrecord, name="api_salesrecord"),
    path("automobiles/", api_automobile_vos, name="api_automobile_vos")
]
