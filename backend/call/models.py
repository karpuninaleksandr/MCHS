from django.db import models

from .choices import Role, Injury
from .managers import PersonManager, CallManager


class Call(models.Model):
    objects = CallManager()

    person = models.ForeignKey('Person', on_delete=models.CASCADE, related_name='person')
    reason = models.CharField(max_length=100)
    comment = models.TextField(max_length=100)
    injures = models.CharField(choices=Injury.choices, max_length=20)     # наличие жертв
    coordinateX = models.FloatField(default=0.0)      # широта
    coordinateY = models.FloatField(default=0.0)     # долгота

    def __str__(self):
        return self.reason #, self.latitude, self.longitude


class Person(models.Model):
    objects = PersonManager()

    name = models.CharField(max_length=50, db_index=True)
    surname = models.CharField(max_length=50, db_index=True)
    patronymic = models.CharField(max_length=50)
    role = models.CharField(choices=Role.choices, default=Role.GUEST, max_length=6)
    call = models.ForeignKey(Call, on_delete=models.CASCADE, related_name='call', blank=True, null=True)

    def __str__(self):
        return self.name, self.surname


