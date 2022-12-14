from rest_framework import serializers

from .choices import Role
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
        r = Person.objects.create(**validated_data)
        return r

    def save(self, **kwargs) -> Person:
        r = super().save(**kwargs)
        return r


class PersonSerializerForAddWorker(PersonSerializerForUpdateData):

    role = serializers.CharField(default=Role.WORKER)


class CallSerializer(serializers.ModelSerializer):
    person = PersonSerializer()

    class Meta:
        model = Call
        fields = '__all__'


class CallSerializerForGetMethod(serializers.ModelSerializer):

    class Meta:
        model = Call
        fields = '__all__'
    # person = PersonSerializerForGetMethod()


class CallSerializerForUpdateData(CallSerializer):
    person = PersonSerializerForUpdateData()

    @staticmethod
    def validate_person(value) -> Person:
        r = Person.objects.get_person_for_new_call(**value)
        return r

    def create(self, validated_data) -> Call:
        r = Call.objects.create(**validated_data)
        return r

    def save(self, **kwargs) -> Call:
        r = super().save(**kwargs)
        return r


