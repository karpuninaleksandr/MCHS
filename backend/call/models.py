from django.db import models


class Person(models.Model):
    name = models.CharField(max_length=50, db_index=True)
    surname = models.CharField(max_length=50, db_index=True)
    patronymic = models.CharField(max_length=50)
    role = models.BooleanField()        # True усли работник

    def __str__(self):
        return self.name, self.surname, self.role


class Calling(models.Model):
    called = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='called')
    workerIds = models.ManyToManyField(Person)
    reason = models.CharField(max_length=100)
    comment = models.TextField(max_length=100)
    injures = models.BooleanField()     # наличие жертв
    latitude = models.FloatField()      # широта
    longitude = models.FloatField()     # долгота

    def __str__(self):
        return self.called, self.latitude, self.longitude