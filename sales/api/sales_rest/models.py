from django.db import models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    is_sold = models.BooleanField(default=False)


class SalesPerson(models.Model):
    name = models.CharField(max_length=250)
    employee_id = models.PositiveSmallIntegerField(unique=True)

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=250)
    address = models.TextField()
    phone_number = models.CharField(unique=True, max_length=15)

    def __str__(self):
        return self.name


class SalesRecord(models.Model):
    price = models.PositiveIntegerField()

    salesperson = models.ForeignKey(
        SalesPerson,
        related_name="salesperson",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE,
    )

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE,
    )
