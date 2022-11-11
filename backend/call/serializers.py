from rest_framework import serializers
from rest_framework.fields import empty

from .models import Person, Call


class PersonSerializer(serializers.ModelSerializer):

    role = serializers.CharField(default=Person.Role.GUEST)

    def __init__(self, instance=None, data=empty, **kwargs):
        super().__init__(instance, data, **kwargs)

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

