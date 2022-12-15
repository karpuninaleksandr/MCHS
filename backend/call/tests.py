from django.test import TestCase
from .choices import Injury
from .models import Person, Call


class PersonModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Person.objects.create(name="Вася", surname="Иванов", patronymic="Петрович")

    def test_saving_full_name(self):
        person = Person.objects.get(id=1)

        self.assertEquals(person.name, "Вася")
        print("\nИмя сохраняется корректно")
        self.assertEquals(person.surname, "Иванов")
        print("Фамилия сохраняется корректно")
        self.assertEquals(person.patronymic, "Петрович")
        print("Отчество сохраняется корректно")

    def test_default_role(self):
        person = Person.objects.get(id=1)

        self.assertEquals(person.role, "Guest")
        print("\nРоль по умолчанию сохраняется корректно")

    def test_str_method(self):
        person = Person.objects.get(id=1)

        self.assertEquals(str(person), f"{person.name}, {person.surname}")
        print("\nМетод __str__ отрабатывает штатно")

    def test_max_length(self):
        person = Person.objects.get(id=1)

        self.assertEquals(person._meta.get_field('name').max_length, 50)
        print("\nМаксималоьная длинна поля name задана верно")
        self.assertEquals(person._meta.get_field('surname').max_length, 50)
        print("Максималоьная длинна поля surname задана верно")
        self.assertEquals(person._meta.get_field('patronymic').max_length, 50)
        print("Максималоьная длинна поля patronymic задана верно")

    def test_unique(self):
        from django.db import IntegrityError
        try:
            Person.objects.create(name="Вася", surname="Иванов", patronymic="Петрович")
            print("\nДобавление в базу человека, чье ФИО уже есть в базе отрабатывается неверно")
        except IntegrityError:
            print("\nДобавление в базу человека, чье ФИО уже есть в базе невозможно")


class CallModelTest(TestCase):
    """
        Для этих тестов нужно закомментировать в модельке Call строку 'objects = CallManager()'
    """

    @classmethod
    def setUpTestData(cls):
        Call.objects.create(reason="Нога болит", comment="АЙ, БОЛЬНО В НОГЕ !!!",
                            injures=Injury.UNKNOWN, coordinateX=123.321, coordinateY=-456.654)

    def test_saving_info(self):
        call = Call.objects.get(id=1)

        self.assertEquals(call.reason, "Нога болит")
        print("\nПричина сохраняется штатно")
        self.assertEquals(call.comment, "АЙ, БОЛЬНО В НОГЕ !!!")
        print("Коментарий сохраняется штатно")
        self.assertEquals(call.injures, "Unknown")
        print("Жертвы сохраняются штатно")
        self.assertEquals(call.coordinateX, 123.321)
        print("Координата Х сохраняется штатно")
        self.assertEquals(call.coordinateY, -456.654)
        print("Координата Y сохраняется штатно")

    def test_max_length(self):
        call = Call.objects.get(id=1)

        self.assertEquals(call._meta.get_field('reason').max_length, 100)
        print("\nМаксималоьная длинна текстового поля reason задана верно")
        self.assertEquals(call._meta.get_field('comment').max_length, 100)
        print("Максималоьная длинна текстового поля comment задана верно")

    def test_default_coordinate(self):
        Call.objects.create(reason="Нога болит", comment="АЙ, БОЛЬНО В НОГЕ !!!",
                            injures=Injury.UNKNOWN)
        call = Call.objects.get(id=2)

        self.assertEquals(call.coordinateY, 0.0)
        print("\nДефолтное значение координаты Y = 0.0")
        self.assertEquals(call.coordinateX, 0.0)
        print("Дефолтное значение координаты X = 0.0")
