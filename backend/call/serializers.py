from rest_framework import serializers

from .models import Person, Call


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'


class CallSerializer(serializers.ModelSerializer):
    person = PersonSerializer()

    class Meta:
        model = Call
        fields = '__all__'
