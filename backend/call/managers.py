from django.db import models


class MyManager(models.Manager):
    def create(self, **data):
        return self.model(**data)


class PersonManager(MyManager):
    def get_person_for_new_call(self, **value):
        """
        Если человек уже делал вызовы берем его из базы
        Иначе создаем запись в базе
        """
        try:
            return self.get(**value)
        except models.ObjectDoesNotExist:
            (instance := self.create(**value)).save()
            return instance


class CallManager(MyManager):
    ...



