from django.db import models

from .choices import Role, Injury
from .managers import PersonManager, CallManager


class Call(models.Model):
    objects = CallManager()

    reason = models.CharField(max_length=100)
    comment = models.TextField(max_length=100)
    injures = models.CharField(choices=Injury.choices, max_length=20)     # наличие жертв
    coordinateX = models.FloatField(default=0.0)      # широта
    coordinateY = models.FloatField(default=0.0)     # долгота

    def str(self):
        return self.reason #, self.latitude, self.longitude

    class Meta:
        db_table = 'call'
        verbose_name = 'call'
        verbose_name_plural = 'calls'


class Person(models.Model):
    objects = PersonManager()

    name = models.CharField(max_length=50, db_index=True)
    surname = models.CharField(max_length=50, db_index=True)
    patronymic = models.CharField(max_length=50)
    role = models.CharField(choices=Role.choices, default=Role.GUEST, max_length=6)
    call = models.ManyToManyField(Call, blank=True, null=True, through='CallToPerson')

    def str(self):
        return f'{self.name}, {self.surname}'

    class Meta:
        db_table = 'person'
        verbose_name = 'person'
        verbose_name_plural = 'persons'
        ordering = ('surname',)
        unique_together = ('name', 'surname', 'patronymic')


class CallToPerson(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    call = models.ForeignKey(Call, on_delete=models.CASCADE)

    class Meta:
        db_table = 'call_to_person'
        verbose_name = 'call_to_person'
        verbose_name_plural = 'calls_to_persons'
        unique_together = ('person', 'call')
