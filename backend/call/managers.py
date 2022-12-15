from django.db import models


class PersonManager(models.Manager):
    def get_person_for_new_call(self, **value):
        """
        Если человек уже делал вызовы берем его из базы
        Иначе создаем запись в базе
        """
        try:
            return self.get(**value)
        except models.ObjectDoesNotExist:
            r = super().create(**value)
            return r


class CallManager(models.Manager):
    def create(self, **data):
        person = data.pop('person')
        call = super().create(**data)
        person.call.add(call)
        return call




