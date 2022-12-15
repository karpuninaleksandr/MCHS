from django.test import TestCase
from .choices import Injury
from .models import Person, Call


class CallToPersonModelTest(TestCase):

    def test_saving_many_to_many_field(self):
        person = Person.objects.create(name="Владимир", surname="Владимиров", patronymic="Владимирович")
        call1 = Call.objects.create(reason="ПАЖАР", comment="ТУТ ПАЖАР !!!",
                                    injures=Injury.YES, coordinateX=38.5215, coordinateY=-77.0321)
        call2 = Call.objects.create(reason="Бомба ядрёная летит", comment="Ну тут все, туши свет",
                                    injures=Injury.NO, coordinateX=38.5351, coordinateY=-77.0211)
        person.call.set([call1.pk, call2.pk])
        # Проверяем то что впринципе сохранение произошло
        self.assertTrue(Person.objects.filter(call__in=(call1, call2)).exists(), True)
        # Проверяем что сохранилось оба обьекта
        self.assertEqual(person.call.count(), 2)
        print("\nСохранение поля ManyToMany отрабатывает корректно")
