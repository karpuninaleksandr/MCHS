from django.db import models


class Person(models.Model):
    name = models.CharField(max_length=50, db_index=True)
    surname = models.CharField(max_length=50, db_index=True)
    patronymic = models.CharField()
    role = models.BooleanField()        # True усли работник

    def __str__(self):
        return self.name, self.surname, self.role


class Call(models.Model):
    called = models.ForeignKey(Person, on_delete=models.CASCADE)
    workers = models.ManyToManyField(Person)
    reason = models.CharField()
    comment = models.TextField()
    injures = models.BooleanField()     # наличие жертв
    latitude = models.FloatField()      # широта
    longitude = models.FloatField()     # долгота

    def __str__(self):
        return self.called, self.latitude, self.longitude