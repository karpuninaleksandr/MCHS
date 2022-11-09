from django.db import models
from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

from .models import Person, Call


class PersonSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50)
    surname = serializers.CharField(max_length=50)
    patronymic = serializers.CharField(max_length=50)


class PersonSerializerForUpdateData(PersonSerializer):

    class Meta:
        ...
        # validators = [
        #     UniqueTogetherValidator(
        #         queryset=Person.objects,
        #         fields=['surname', 'name', 'patronymic']
        #     )
        # ]

    def create(self, validated_data):
       return Person.objects.create(**validated_data)


class CallSerializer(serializers.ModelSerializer):
    person = PersonSerializerForUpdateData()

    def validate_person(self, value):
        try:
            return Person.objects.get(**value)
        except models.ObjectDoesNotExist:
            return Person.objects.create(**value).save()

    class Meta:

        model = Call
        exclude = ['injures', 'longitude', 'latitude', 'workers']

    def create(self, validated_data):
        return Call.objects.create(**validated_data)
