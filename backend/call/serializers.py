from rest_framework import serializers

from .models import Person, Call


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'


class CallSerializer(serializers.ModelSerializer):
    # TODO необходимо проверять есть ли person в базе, если нет то выкидывать исклдчение и создавать его
    person = PersonSerializer()

    class Meta:
        model = Call
        fields = ['injures', 'person']

    def validate_person(self, value):
        res = PersonSerializer(value)
        ...
        # Если данные проходят проверку, то мы из этих данных смотрим есть ли такой человек в базе, есил нет выдаем исключение