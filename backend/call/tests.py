from django.test import TestCase

from .models import Person


class PersonModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        person = Person()
        person.name = "Вася"
        person.surname = "Иванов"
        person.patronymic = "Петрович"
        person.save()

    def test_saving(self):
        person = Person.objects.get(id=1)
        name = person.name
        self.assertEquals(name, "Вася")