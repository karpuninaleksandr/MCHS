from rest_framework import serializers
from .models import Person, Call


class PersonSerializerForGetMethod(serializers.ModelSerializer):
    class Meta:
        model = Person
        exclude = ['role']


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'


class PersonSerializerForUpdateData(PersonSerializer):

    def create(self, validated_data) -> Person:
        return Person.objects.create(**validated_data)

    def save(self, **kwargs) -> Person:
        (instance := super().save(**kwargs)).save()
        return instance


class CallSerializer(serializers.ModelSerializer):
    person = PersonSerializer()

    class Meta:
        model = Call
        fields = '__all__'
        # exclude = ['longitude', 'latitude']


class CallSerializerForGetMethod(CallSerializer):
    person = PersonSerializerForGetMethod()


class CallSerializerForUpdateData(CallSerializer):
    person = PersonSerializerForUpdateData()

    @staticmethod
    def validate_person(value) -> Person:
        return Person.objects.get_person_for_new_call(**value)

    def create(self, validated_data) -> Call:
        return Call.objects.create(**validated_data)

    def save(self, **kwargs) -> Call:
        (instance := super().save(**kwargs)).save()
        return instance

