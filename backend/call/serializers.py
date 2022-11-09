from django.db import models
from rest_framework import serializers
from .models import Person, Call


class PersonSerializer(serializers.ModelSerializer):
    role = serializers.CharField(default=Person.Role.GUEST)

    class Meta:
        model = Person
        fields = '__all__'


class PersonSerializerForCreateData(PersonSerializer):
    def create(self, validated_data):
        return Person.objects.create(**validated_data)


class CallSerializer(serializers.ModelSerializer):
    person = PersonSerializerForCreateData()

    @staticmethod
    def validate_person(value):
        try:
            return Person.objects.get(**value)
        except models.ObjectDoesNotExist:
            return Person.objects.create(**value).save()

    class Meta:
        model = Call
        exclude = ['longitude', 'latitude', 'workers']

    def create(self, validated_data):
        return Call.objects.create(**validated_data)
