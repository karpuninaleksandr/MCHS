from django.db import models

from .managers import PersonManager, CallManager


class Person(models.Model):
    objects = PersonManager()

    class Role(models.TextChoices):
        GUEST = 'Guest'
        WORKER = 'Worker'

    name = models.CharField(max_length=50, db_index=True)
    surname = models.CharField(max_length=50, db_index=True)
    patronymic = models.CharField(max_length=50)
    role = models.CharField(choices=Role.choices, default=Role.GUEST, max_length=6)

    def __str__(self):
        return self.name, self.surname


class Call(models.Model):
    objects = CallManager()

    class Injury(models.TextChoices):
        YES = 'Да'
        NO = 'Нет'
        UNKNOWN = 'Не знаю'

    person = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='person')
    workers = models.ManyToManyField(Person)
    reason = models.CharField(max_length=100)
    comment = models.TextField(max_length=100)
    injures = models.CharField(choices=Injury.choices, max_length=7)     # наличие жертв
    latitude = models.FloatField()      # широта
    longitude = models.FloatField()     # долгота

    def __str__(self):
        return self.person, self.latitude, self.longitude
