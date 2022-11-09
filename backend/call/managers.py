from django.db import models


class PersonManager(models.Manager):
    def create(self, **data):
        return self.model(**data)


class CallManager(models.Manager):
    def create(self, **data):
        person = data.pop('person')
        return self.model(person, **data)
