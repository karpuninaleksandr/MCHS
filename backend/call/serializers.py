from rest_framework import serializers
from .models import Person, Call


class PersonSerializer(serializers.ModelSerializer):
    role = serializers.CharField(default=Person.Role.GUEST)

    class Meta:
        model = Person
        fields = '__all__'


class PersonSerializerForCreateData(PersonSerializer):
    def create(self, validated_data) -> Person:
        return Person.objects.create(**validated_data)


class CallSerializer(serializers.ModelSerializer):
    person = PersonSerializer()

    class Meta:
        model = Call
        exclude = ['longitude', 'latitude']


class CallSerializerForUpdateData(CallSerializer):
    person = PersonSerializerForCreateData()

    @staticmethod
    def validate_person(value) -> Person:
        return Person.objects.get_person_for_new_call(**value)

    def create(self, validated_data) -> Call:
        return Call.objects.create(**validated_data)

    def is_valid(self, *, raise_exception=False) -> bool:
        if not super().is_valid(raise_exception=raise_exception):
            return False
        self.save()
        return True

    def save(self, **kwargs) -> Call:
        instance = super().save(**kwargs)
        return instance.save()

