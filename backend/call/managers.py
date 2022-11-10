from django.db import models


class PersonManager(models.Manager):
    def create(self, **data):
        return self.model(**data)

    @staticmethod
    def get_person_for_new_call(**value):
        """
        Если человек уже делал вызовы берем его из базы
        Иначе создаем запись в базе
        """
        try:
            return PersonManager.get(**value)
        except models.ObjectDoesNotExist:
            return PersonManager.create(**value).save()


class CallManager(models.Manager):
    def create(self, **data):
        return self.model(person=data.pop('person'), **data)


